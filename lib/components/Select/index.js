import { Fill, Stroke, Style, RegularShape } from 'ol/style';
import { createEditingStyle } from "ol/style/Style";
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import RenderFeature from 'ol/render/Feature';
import Overlay from 'ol/Overlay.js';
import { toFeature } from 'ol/render/Feature';
import Collection from 'ol/Collection.js';
import { extend } from "ol/array";
import { fromLonLat, toLonLat, transformExtent } from 'ol/proj.js';

import { createPopper } from "@popperjs/core";

import MapViewer from '../MapViewer';
import DataTable from '../DataTable';

export default class {
  /**
   * Add various components for Select widget
   * @param {MapViewer} viewer The Map Viewer component
   * @returns void
   */
  constructor(viewer, widgetConfig) {
    this._viewer = viewer;
    this._widgetConfig = widgetConfig;

    // All select should have data table. Instance here.
    this._dataTable = new DataTable(this);

    this._selectableLayers = Object.keys(widgetConfig.layers);
    this._selectedFeatures = new Collection([], { unique: true });
    this._setupWidget(viewer, widgetConfig);
    viewer.addContextMenu(this.contextMenu);

    if (widgetConfig.customPopupTemplate) {
      import(/* @vite-ignore */ widgetConfig.customPopupTemplate)
        .then(({ default: popupFunction }) => this._popupFunction = popupFunction);
    }
  }

  addToSelections(featureLike) {
    if (!featureLike) return undefined;

    const mapboxLayer = featureLike.get('mapbox-layer');
    const layerName = (mapboxLayer && mapboxLayer['source-layer']) ? mapboxLayer['source-layer'] : mapboxLayer.source;

    // if it's not the layer we're allow to select, then reject selection
    if (!this._selectableLayers.includes(layerName)) return false;

    return this._selectedFeatures.push(featureLike);
  }

  refilterSelections(layers) {
    // Set new filter
    this._selectableLayers = layers;

    // Can't be working with mutable array, need to clone first
    const selectionClone = this._selectedFeatures.getArray().slice();
    selectionClone.forEach((item) => {
      const mapboxLayer = item.get('mapbox-layer');
      const layerName = (mapboxLayer && mapboxLayer['source-layer']) ? mapboxLayer['source-layer'] : mapboxLayer.source;
      if (!this._selectableLayers.includes(layerName)) this._selectedFeatures.remove(item);
    });
  }

  exitSelectMode() {
    this._selectMode = false;
    this._selectedFeatures.clear();
    this._selectOverlay.getSource().clear();
    this.contextMenu.classList.add('d-none');
    this.widgetButton.classList.remove('widget-button-selected');

    this._dataTable.destroyDataSpace();
  }

  redraw() {
    this._selectOverlay.getSource().clear();
    this._selectedFeatures.forEach((feature) => {
      const f = (feature instanceof RenderFeature) ? toFeature(feature) : feature;
      this._selectOverlay.getSource().addFeature(f);
    });
  }

  get selectedFeatures() {
    return this._selectedFeatures;
  }

  get viewer() {
    return this._viewer;
  }

  get widgetButton() {
    if (this._widgetButton) return this._widgetButton;

    this._widgetButton = document.createElement("button");
    this._widgetButton.textContent = "arrow_selector_tool";

    // Set up events
    this._widgetButton.addEventListener('click', (event) => {
      if (this._selectMode = !this._selectMode) {
        // event.target.classList.add('widget-button-selected');
        // event.target.title = 'Select (Active)';
        this.contextMenu.classList.remove('d-none');
      } else {
        // event.target.classList.remove('widget-button-selected', 'mdc-ripple-upgraded--background-focused');
        // event.target.title = 'Select';
        this.contextMenu.classList.add('d-none');
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
        <section class="select-operations mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar"></section>
     </div>
    `;

    //const ops = this._widgetConfig.operations.map(op => Object.keys(op)[0]);

    // Data Table widget button
    this._contextMenu.querySelector('.select-operations').appendChild(this._dataTable.widgetButton);

    // Layer filter
    const layerOptions = [[this._selectableLayers.join(','), 'All selectable layers']]
      .concat(Object.entries(this._widgetConfig.layers));
    const layerSelect = document.createElement('select');
    layerSelect.classList.add('form-select');
    for (let [layer, label] of layerOptions) {
      const opt = document.createElement('option');
      opt.value = layer;
      opt.textContent = label;
      layerSelect.appendChild(opt);
    }
    layerSelect.addEventListener('change', (event) => {
      this.refilterSelections(event.target.value.split(','));
    });

    this._contextMenu.querySelector('.select-operations').appendChild(layerSelect);

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

    this._popupContent = document.createElement('div');
    this._popupElement.appendChild(this._popupContent);

    const arrow = document.createElement('div');
    arrow.id = 'arrow';
    arrow.dataset.popperArrow = '';
    this._popupElement.appendChild(arrow);

    return this._popupElement;
  }

  _setupWidget(viewer, widgetConfig) {
    // Sets up popup content and its positioning
    this._popupOverlay = this._setupPopup();
    // Overlay that draws the selected features
    this._selectOverlay = new VectorLayer({
      source: new VectorSource(),
      style: this._styleFunction()
    });

    // When map is loaded, add selection and popup overlays
    // FIXME: Is postrender really the best event here?
    viewer.map.once('postrender', (event) => {
      event.target.addLayer(this._selectOverlay);
      event.target.addOverlay(this._popupOverlay);
    });

    // Listens for select event
    viewer.map.on('click', this._handleClick.bind(this));
    // Listens for when selection changes
    this._selectedFeatures.on(['add', 'remove'], this._handleSelectionChange.bind(this));
  }

  _handleSelectionChange(event) {
    const affectedFeature = (event.element instanceof RenderFeature) ? toFeature(event.element) : event.element;

    if (event.type === 'add') {
      this._selectOverlay.getSource()
        .addFeature(affectedFeature);
    } else if (event.type === 'remove') {
      this.redraw();
    }

    if (this._selectedFeatures.getLength() > 0) {
      this._selectMode = true;
      this.contextMenu.classList.remove('d-none');
      this.widgetButton.classList.add('widget-button-selected');
    } else {
      this.exitSelectMode();
    }
  }

  _handleClick(event) {
    // Clears existing tooltip, if any
    this._clearPopup();

    // Find features at clicked pixel
    const features = event.target
      .getFeaturesAtPixel(event.pixel, {
        // ignore own selectin layer
        layerFilter: (layer) => layer !== this._selectOverlay
      });

    if (this._selectMode) {
      if (features.length == 0) return;
      features.forEach(feature => {
        // If item exists, remove. Otherwise, add!
        if (this._selectedFeatures.remove(feature) === undefined) this.addToSelections(feature);
      });
    } else {
      console.log('Features at pixel', features);
      if (features.length == 0) return;

      this._popupContent.replaceChildren(
        this._renderPopupContent(features[0].getProperties()),
        this._popupControls(features)
      );

      this._popupOverlay.setPosition(event.coordinate);

      this._popper = createPopper(
        this._popupOverlay
          .getElement()
          .querySelector('.popup-reference'),
        this.popup,
        {
          placement: 'top',
          modifiers: [{
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          }]
        });
    }
  }

  _setupPopup() {
    // Overlay for popup box
    const popupOverlayElement = document.createElement('div');
    const popupReference = document.createElement('div');
    popupReference.classList.add('popup-reference');
    popupOverlayElement.appendChild(popupReference);
    popupOverlayElement.appendChild(this.popup);

    return new Overlay({
      element: popupOverlayElement,
      positioning: 'center-center',
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });
  }

  _renderPopupContent(properties) {
    if (this._popupFunction) return this._popupFunction(properties);
    else {
      return JSON.stringify(properties, (key, value) => {
        if (key === 'geometry' || key === 'mapbox-layer') return undefined;
        return value;
      });
    }
  }

  _popupControls(features) {
    if (this._currentPopupControl) this._currentPopupControl.remove();

    const englishObstacle = `feature${(features.length > 1) ? 's' : ''}`;

    const controls = document.createElement('div');
    controls.classList.add('popup-controls');

    const selectButton = document.createElement('i');
    selectButton.classList.add('material-symbols-rounded');
    selectButton.title = 'Select ' + englishObstacle;
    selectButton.textContent = 'arrow_selector_tool';
    selectButton.addEventListener('click', () => {
      // This fat arrow binds the current `features` to this button and pray GC does the job
      this._clearPopup();
      features.forEach(feature => this.addToSelections(feature));
    });
    controls.appendChild(selectButton);

    const dataButton = document.createElement('i');
    dataButton.classList.add('material-symbols-rounded');
    dataButton.title = 'See more details';
    dataButton.textContent = 'table_rows_narrow';
    dataButton.addEventListener('click', () => {
      this._clearPopup();
      features.forEach(feature => this.addToSelections(feature));
      this._dataTable.toggleDataSpace();
    });
    controls.appendChild(dataButton);

    const count = document.createElement('span');
    count.title = `There are ${features.length} ${englishObstacle} at this location`;
    count.textContent = `${features.length} ${englishObstacle}`;
    controls.appendChild(count);

    this._currentPopupControl = controls;
    return controls;
  }

  _clearPopup() {
    if (this._popper) this._popper.destroy();
    this._popupOverlay.setPosition(undefined);
  }

  _styleFunction(feature) {
    const styles = createEditingStyle();
    extend(styles['Polygon'], styles['LineString']);
    extend(styles['GeometryCollection'], styles['LineString']);

    return function (feature) {
      if (!feature.getGeometry()) {
        return null;
      }
      return styles[feature.getGeometry().getType()];
    };
  }

  _layerFilter(config) {
    return (layer) => {
      // ignore own selectin layer
      if (layer === this._selectOverlay) return false;
      else return true;
    };
  }
}