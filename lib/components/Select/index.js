import { Fill, Stroke, Style, RegularShape } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import RenderFeature from 'ol/render/Feature';
import Overlay from 'ol/Overlay.js';
import { toFeature } from 'ol/render/Feature';
import Collection from 'ol/Collection.js';
import { fromLonLat, toLonLat, transformExtent } from 'ol/proj.js';

import { createPopper } from "@popperjs/core";

import MapViewer from '../MapViewer';

export default class {
  /**
   * Add various components for Select widget
   * @param {MapViewer} viewer The Map Viewer component
   * @returns void
   */
  constructor(viewer, widgetConfig) {
    this._setupWidget(viewer, widgetConfig);

    viewer.addContextMenu(this.contextMenu);
    // viewer.addUIToMapSpace(this.popup);
  }

  exitSelectMode() {
    this._selectedFeatures.clear();
  }

  get widgetButton() {
    if (this._widgetButton) return this._widgetButton;

    this._widgetButton = document.createElement("button");
    this._widgetButton.textContent = "left_click";

    // Set up events
    this._widgetButton.addEventListener('click', (event) => {
      this._selectMode = !this._selectMode;
      if (this._selectMode) {
        event.target.classList.add('widget-button-selected');
        event.target.title = 'Select (Active)';
      } else {
        event.target.classList.remove('widget-button-selected', 'mdc-ripple-upgraded--background-focused');
        event.target.title = 'Select';
      } 
    });

    return this._widgetButton;
  }

  get contextMenu() {
    if (this._contextMenu) return this._contextMenu;

    this._contextMenu = document.createElement('header');
    this._contextMenu.classList.add('context-menu', 'mdc-top-app-bar', 'd-none');

    this._contextMenu.innerHTML = /*html*/`
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button id="close-select-context" class="material-symbols-rounded mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-surface" aria-label="Close">close</button>
          <span class="mdc-top-app-bar__title">Selections</span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <button class="material-symbols-rounded mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Data Table" title="Data Table">toc</button>
          <button class="material-symbols-rounded mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Buffer Select" title="Buffer Select">track_changes</button>
          <button class="material-symbols-rounded mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Open menu">more_vert</button>
        </section>
     </div>
    `;

    // Clear selections when context menu is closed
    this._contextMenu.querySelector('#close-select-context')
      .addEventListener('click', () => this.exitSelectMode());

    return this._contextMenu;
  }

  get popup() {
    if (this._popupElement) return this._popupElement;

    this._popupElement = document.createElement('div');
    this._popupElement.id = 'select-popup';
    this._popupElement.setAttribute('role', 'tooltip');

    // const closer = document.createElement('a');
    // closer.classList.add('ol-popup-closer');
    // closer.addEventListener('click', (event) => {
    //   this._popupOverlay.setPosition(undefined);
    //   event.target.blur();
    //   return false;
    // });
    // this._popupElement.appendChild(closer);

    this._popupContent = document.createElement('div');
    this._popupElement.appendChild(this._popupContent);

    const arrow = document.createElement('div');
    arrow.id = 'arrow';
    arrow.dataset.popperArrow = '';
    this._popupElement.appendChild(arrow);

    return this._popupElement;
  }

  async _setupWidget(viewer, widgetConfig) {
    const { default: popupFunction } = await import(/* @vite-ignore */ widgetConfig.customPopupTemplate);

    // Maintain a Collection of selected items
    // Listen for add and remove events to know when to draw selected features on the map
    this._selectedFeatures = new Collection();
    this._selectedFeatures.on(['add', 'remove'], (event) => {
      const affectedElement = event.element;

      if (event.type === 'add') {
        this._selectOverlay.getSource()
          .addFeature((affectedElement instanceof RenderFeature) ? toFeature(affectedElement) : affectedElement);
      } else if (event.type === 'remove') {

      }

      if (this._selectedFeatures.getLength() > 0) {
        this._selectMode = true;
        this.contextMenu.classList.remove('d-none');
        this.widgetButton.classList.add('widget-button-selected');
      } else {
        this._selectMode = false;
        this._selectOverlay.getSource().clear();
        this.contextMenu.classList.add('d-none');
        this.widgetButton.classList.remove('widget-button-selected');
      }
    });

    // Overlay that draws the selected features
    this._selectOverlay = new VectorLayer({
      source: new VectorSource(),
      style: this._styleFunction.bind(this)
    });

    // Overlay for popup box
    const popupOverlayElement = document.createElement('div')
    const popupReference = document.createElement('div')
    popupOverlayElement.appendChild(popupReference);
    popupOverlayElement.appendChild(this.popup);
    this._popupOverlay = new Overlay({
      element: popupOverlayElement,
      positioning: 'center-center',
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    // Set up listeners on the Map
    // FIXME: Is postrender really the best event here?
    viewer.map.once('postrender', event => {
      event.target.addLayer(this._selectOverlay);
      event.target.addOverlay(this._popupOverlay);
    });

    viewer.map.on('click', event => {
      // Clears existing tooltip, if any
      if (this._popper) this._popper.destroy();
      this._popupOverlay.setPosition(undefined);

      // Find features at clicked pixel
      const features = event.target
        .getFeaturesAtPixel(event.pixel, {
          hitTolerance: 3,
          layerFilter: this._layerFilter(viewer.config)
        });

      if (this._selectMode) {
        if (features.length == 0) this._selectedFeatures.clear();
        features.forEach(feature => {
          this._selectedFeatures.push(feature)
          console.log(feature)
        });
      } else {
        console.log('Features at pixel', features);
        if (features.length == 0) return;

        this._popupContent.replaceChildren(
          popupFunction(features[0].getProperties()),
          this._popupControls(features)
        );

        this._popupOverlay.setPosition(event.coordinate);

        this._popper = createPopper(popupReference, this.popup, {
          placement: 'top',
          modifiers: [{
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          }]
        });
      }
    });
  }

  _popupControls(features) {
    const englishObstacle = `feature${(features.length > 1) ? 's' : ''}`;

    const controls = document.createElement('div');
    controls.classList.add('popup-controls');
    controls.style.textAlign = 'center';

    const selectButton = document.createElement('i');
    selectButton.classList.add('material-symbols-rounded');
    selectButton.title = 'Select ' + englishObstacle;
    selectButton.textContent = 'left_click';
    selectButton.addEventListener('click', () => {
      // This fat arrow binds the current `features` to this button and pray GC does the job
      if (this._popper) this._popper.destroy();
      this._popupOverlay.setPosition(undefined);
      features.forEach(feature => this._selectedFeatures.push(feature));
    });
    controls.appendChild(selectButton);

    const dataButton = document.createElement('i');
    dataButton.classList.add('material-symbols-rounded');
    dataButton.title = 'See more details';
    dataButton.textContent = 'toc';
    controls.appendChild(dataButton);

    const count = document.createElement('span');
    count.title = `There are ${features.length} ${englishObstacle} at this location`;
    count.textContent = `${features.length} ${englishObstacle}`;
    controls.appendChild(count);

    return controls;
  }

  _styleFunction() {
    const stroke = new Stroke({ color: 'red', width: 3 });
    const fill = new Fill({ color: 'rgba(255,0,0,0.2)' });
    return new Style({
      image: new RegularShape({
        fill: fill,
        stroke: stroke,
        points: 4,
        radius: 10,
        angle: Math.PI / 4,
      }),
    });
  }

  _layerFilter(config) {
    return (layer) => {
      return true;
    };
  }
}