import Layer from 'ol/layer/Layer.js';
import Source from 'ol/source/Source.js';
import { getCenter } from "ol/extent";
import { toLonLat } from 'ol/proj.js';

import {MDCMenuSurface} from '@material/menu-surface';


import mapboxgl from 'mapbox-gl';
import MapViewer from '../MapViewer';

export default class {
  /**
   * Add various components for basemaps
   * @param {MapViewer} viewer The Map Viewer component
   * @returns void
   */
  constructor(viewer) {
    mapboxgl.accessToken = viewer.config.mapboxAccessToken;

    this.viewer = viewer;
    this.basemaps = viewer.config.basemaps;
    if (!this.basemaps || this.basemaps.length == 0) {
      viewer.promptError({ error: new Error('Warning: No basemaps defined.')});
      return;
    }

    // Add the first basemap listed
    this.addLayerToMap(this.basemaps[0]);
  }

  addLayerToMap(config) {
    this.initialExtents = this.viewer.config.mapOptions.bounds;

    this.mbMap = new mapboxgl.Map({
      style: config.style,
      attributionControl: false,
      boxZoom: false,
      center: getCenter(this.initialExtents),
      container: this.viewer.mapContainer,
      doubleClickZoom: false,
      dragPan: false,
      dragRotate: false,
      interactive: false,
      keyboard: false,
      pitchWithRotate: false,
      scrollZoom: false,
      touchZoomRotate: false,
    });

    // Fixes some weird layout with flex on both FF and Chrome.
    this.mbMap.on('load', (event) => event.target.resize());

    this.mbLayer = new Layer({
      render: (frameState) => {
        const canvas = this.mbMap.getCanvas();
        const viewState = frameState.viewState;

        const visible = this.mbLayer.getVisible();
        canvas.style.display = visible ? 'block' : 'none';
        canvas.style.position = 'absolute';

        const opacity = this.mbLayer.getOpacity();
        canvas.style.opacity = opacity;

        // adjust view parameters in mapbox
        const rotation = viewState.rotation;
        this.mbMap.jumpTo({
          center: toLonLat(viewState.center),
          zoom: viewState.zoom - 1,
          bearing: (-rotation * 180) / Math.PI,
          animate: false,
        });

        // cancel the scheduled update & trigger synchronous redraw
        // see https://github.com/mapbox/mapbox-gl-js/issues/7893#issue-408992184
        // NOTE: THIS MIGHT BREAK IF UPDATING THE MAPBOX VERSION
        if (this.mbMap._frame) {
          this.mbMap._frame.cancel();
          this.mbMap._frame = null;
        }
        this.mbMap._render();

        return canvas;
      },
      source: new Source({
        attributions: [
          config.attributions,
        ],
      }),
    });

    this.viewer.map.getLayers().insertAt(0, this.mbLayer);
  }

  destroy() {
    this.viewer.map.removeLayer(this.mbLayer);
    this.mbMap.remove();
  }

  get widgetButton() {
    if (this._widgetButton) return this._widgetButton;

    this._widgetButton = document.createElement("button");
    this._widgetButton.textContent = "layers";

    // Set up events
    this._widgetButton.addEventListener('click', (event) => {
      // this.mapSpaceUI.classList.toggle('ui-show')
      this.menu.open();
    });

    return this._widgetButton;
  }

  get mapSpaceUI () {
    if (this._mapSpaceUI) return this._mapSpaceUI;

    const ui = document.createElement('div');
    ui.classList.add('basemaps-ui', 'mdc-menu', 'mdc-menu-surface');

    this.menu = new MDCMenuSurface(ui);

    this.basemaps.forEach(basemap => {
      const card = document.createElement('div');
      card.classList.add('mdc-card');
      card.innerHTML = /*html*/`
        <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--square" style="background-image: url(${basemap.imagePreview})">
            <div class="mdc-card__media-content">${basemap.name}</div>
          </div>
          <div class="mdc-card__ripple"></div>
        </div>
      `;

      card.addEventListener('click', () => {
        this.destroy();
        this.addLayerToMap(basemap);
      });
      
      ui.appendChild(card);
    });

    this._mapSpaceUI = ui;
    return this._mapSpaceUI;
  }
}
