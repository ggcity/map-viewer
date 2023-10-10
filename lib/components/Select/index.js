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

  clearSelections() {
    this._selectedFeatures.clear();
  }

  get widgetButton() {
    if (this._widgetButton) return this._widgetButton;

    this._widgetButton = document.createElement("button");
    this._widgetButton.textContent = "left_click";

    // Set up events
    this._widgetButton.addEventListener('click', (event) => {
      // this.mapSpaceUI.classList.toggle('ui-show')
      //this._selectMode()
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
          <span class="mdc-top-app-bar__title">Contextual title</span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <button class="material-symbols-rounded mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Share">share</button>
          <button class="material-symbols-rounded mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Delete">delete</button>
          <button class="material-symbols-rounded mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Open menu">more_vert</button>
        </section>
     </div>
    `;

    // Clear selections when context menu is closed
    this._contextMenu.querySelector('#close-select-context')
      .addEventListener('click', () => this.clearSelections());

    return this._contextMenu;
  }

  get popup() {
    if (this._popupElement) return this._popupElement;

    this._popupElement = document.createElement('div');
    this._popupElement.id = 'select-tooltip';
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

      if (this._selectedFeatures.getLength() > 0) this.contextMenu.classList.remove('d-none');
      else {
        this._selectOverlay.getSource().clear();
        this.contextMenu.classList.add('d-none');
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
    viewer.map.once('postrender', event => {
      event.target.addLayer(this._selectOverlay);
      event.target.addOverlay(this._popupOverlay);
    });

    viewer.map.on('click', event => {
      if (this._popper) this._popper.destroy();

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
        this._popupContent.replaceChildren(popupFunction(features[0].getProperties()));
        this._popupOverlay.setPosition(event.coordinate);
        
        this._popper = createPopper(popupReference, this.popup, {
          placement: 'top',
          modifiers: [{
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          }]
          // {
          //   name: 'arrow',
          //   options: {
          //     padding: 20, // 5px from the edges of the popper
          //   },
          // }],
        });
      }
    });
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