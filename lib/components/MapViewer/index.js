import { MDCRipple } from '@material/ripple';
import { MDCDrawer } from "@material/drawer";
import { MDCBanner } from '@material/banner';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Layer from 'ol/layer/Layer.js';
import Source from 'ol/source/Source.js';
import { getCenter } from "ol/extent";
import { fromLonLat, toLonLat, useGeographic, transformExtent } from 'ol/proj.js';

import mapboxgl from 'mapbox-gl';

import readConfig from './config-reader';
import viewerStyles from './styles.scss?inline';

export default class extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = /*html*/`
      <style>${viewerStyles}</style>
      
      <aside class="mdc-drawer mdc-drawer--modal">
        <div class="mdc-drawer__content">
          <nav class="mdc-list">
            <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
              <span class="mdc-list-item__text">Inbox</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
              <span class="mdc-list-item__text">Outgoing</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
              <span class="mdc-list-item__text">Drafts</span>
            </a>
          </nav>
        </div>
      </aside>
      <div class="mdc-drawer-scrim"></div>

      <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button id="menu" class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-surface" aria-label="Open navigation menu">menu</button>
            <span class="mdc-top-app-bar__title">Garden Grove</span>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Favorite">favorite</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Search" id="search-btn">search</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Options">more_vert</button>
          </section>
        </div>
      </header>

      <main class="mdc-top-app-bar--fixed-adjust">
        <div id="error-banner" class="mdc-banner mdc-banner--centered" role="banner">
        <div class="mdc-banner__content"
            role="alertdialog"
            aria-live="assertive">
          <div class="mdc-banner__graphic-text-wrapper">
            <div id="error-banner-text" class="mdc-banner__text"></div>
          </div>
          <div class="mdc-banner__actions">
            <button type="button" class="mdc-button mdc-banner__primary-action">
              <div class="mdc-button__ripple"></div>
              <div class="mdc-button__label">Dismiss</div>
            </button>
          </div>
        </div>
      </div>

      <div id="map"></div>
      </main>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    readConfig(this.getAttribute('config') || this.getQueryParam('config'))
      .then(this._initialize.bind(this))
      .catch(error => {
        this.promptError({ error: error, throwError: true });
      });
  }

  promptError({ error, actions, throwError }) {
    this.errorBanner ||= new MDCBanner(this.shadowRoot.querySelector('#error-banner'));

    const errorContainer = this.shadowRoot.getElementById('error-banner');
    this.errorBanner.setText(error.message);
    this.errorBanner.open();

    if (throwError) {
      throw error;
    }
  }

  get map() {
    return this._map;
  }

  get mapContainer() {
    return this._mapContainer ||= this.shadowRoot.getElementById('map');
  }

  get viewerConfig() {
    return this._viewerConfig;
  }

  _initialize(config) {
    this._viewerConfig = config;

    // Set up MDC
    this.shadowRoot.querySelectorAll('.mdc-icon-button').forEach(b => (new MDCRipple(b)).unbounded = true);
    this.drawer = MDCDrawer.attachTo(this.shadowRoot.querySelector('.mdc-drawer'));
    this.shadowRoot.getElementById('menu').addEventListener('click', () => this.drawer.open = true);

    this._setupMap();
  }

  _setupMap() {
    useGeographic();
    
    const initialExtents = this.viewerConfig.mapOptions.bounds;

    this._map = new Map({
      target: this.mapContainer,
      view: new View({
        center: getCenter(initialExtents),
        zoom: 14,
        constrainResolution: true
      })
    });

    const defaultBase = this.viewerConfig.baseMaps.find(bm => bm.default);
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2djaXR5IiwiYSI6ImNqNXpjM3czcjA4djIzMm4wOWQ0YjExMzcifQ.PeDOEiLNe7AkmhSa9ZK3aQ';
    const mbMap = new mapboxgl.Map({
      style: defaultBase.style,
      attributionControl: false,
      boxZoom: false,
      center: getCenter(initialExtents),
      container: this.mapContainer,
      doubleClickZoom: false,
      dragPan: false,
      dragRotate: false,
      interactive: false,
      keyboard: false,
      pitchWithRotate: false,
      scrollZoom: false,
      touchZoomRotate: false,
    });

    mbMap.on('load', (event) => {
      event.target.resize();
    })

    let mbLayer = new Layer({
      render: function (frameState) {
        const canvas = mbMap.getCanvas();
        const viewState = frameState.viewState;

        const visible = mbLayer.getVisible();
        canvas.style.display = visible ? 'block' : 'none';
        canvas.style.position = 'absolute';

        const opacity = mbLayer.getOpacity();
        canvas.style.opacity = opacity;

        // adjust view parameters in mapbox
        const rotation = viewState.rotation;
        mbMap.jumpTo({
          center: toLonLat(viewState.center),
          zoom: viewState.zoom - 1,
          bearing: (-rotation * 180) / Math.PI,
          animate: false,
        });

        // cancel the scheduled update & trigger synchronous redraw
        // see https://github.com/mapbox/mapbox-gl-js/issues/7893#issue-408992184
        // NOTE: THIS MIGHT BREAK IF UPDATING THE MAPBOX VERSION
        if (mbMap._frame) {
          mbMap._frame.cancel();
          mbMap._frame = null;
        }
        mbMap._render();

        return canvas;
      },
      source: new Source({
        attributions: [
          '<a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
        ],
      }),
    });

    this.map.getLayers().insertAt(0, mbLayer);
  }
}
