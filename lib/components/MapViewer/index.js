import { MDCRipple } from '@material/ripple';
import { MDCDrawer } from "@material/drawer";
import { MDCBanner } from '@material/banner';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { getCenter } from "ol/extent";
import { fromLonLat, toLonLat, useGeographic, transformExtent } from 'ol/proj.js';
import LayerGroup from 'ol/layer/Group';
import { apply, getLayer, getLayers, getSource, renderTransparent } from 'ol-mapbox-style';

import readConfig from './config-reader';
import { Basemaps, Select } from './widgets';

import viewerStyles from './styles.scss?inline';

const widgetsAvailable = {
  Basemaps,
  Select
};

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
          <section id="main-app-bar" class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar"></section>
        </div>
      </header>

      <span id="context-menus"></span>

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

      <section id="ui-space"></section>

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

  addButtonToMainBar(button) {
    // add common classes
    button.classList.add(
      "material-icons",
      "mdc-top-app-bar__action-item",
      "mdc-icon-button",
      "mdc-ripple-surface"
    );

    // set nice ripple effect
    (new MDCRipple(button)).unbounded = true;
    this.shadowRoot.getElementById('main-app-bar').appendChild(button);
  }

  addContextMenu(node) {
    node.querySelectorAll('.mdc-icon-button').forEach(e => (new MDCRipple(e)).unbounded = true);
    this.shadowRoot.getElementById('context-menus').after(node);
  }

  addUIToMapSpace(node) {
    this.shadowRoot.getElementById('ui-space').appendChild(node);
  }

  addToDrawer() {

  }

  addToDataSpace() {

  }

  showDataSpace() {}

  get map() {
    return this._map;
  }

  get mapContainer() {
    return this._mapContainer ||= this.shadowRoot.getElementById('map');
  }

  get config() {
    return this._viewerConfig;
  }

  _initialize(config) {
    this._viewerConfig = config;

    // Set up MDC
    this.shadowRoot.querySelectorAll('.mdc-icon-button').forEach(b => (new MDCRipple(b)).unbounded = true);
    this.drawer = MDCDrawer.attachTo(this.shadowRoot.querySelector('.mdc-drawer'));
    this.shadowRoot.getElementById('menu').addEventListener('click', () => this.drawer.open = true);

    this._setupMap();
    this._setupWidgets();
    this._setupVectorOverlay();
  }

  _setupMap() {    
    // const initialExtents = transformExtent(this.config.mapOptions.bounds, 'EPSG:4326', 'EPSG:3857');
    const initialExtents = this.config.mapOptions.bounds;

    this._map = new Map({
      target: this.mapContainer,
      view: new View({
        center: fromLonLat(getCenter(initialExtents)),
        zoom: 13,
        constrainResolution: true
      })
    });
  }

  _setupWidgets() {
    this.config.widgets.forEach((widget) => {
      const widgetClass = (typeof widget === 'object') ? Object.keys(widget)[0] : widget;

      if (widgetsAvailable[widgetClass]) {
        const w = new widgetsAvailable[widgetClass](this);
        if (w.widgetButton) this.addButtonToMainBar(w.widgetButton);
        if (w.mapSpaceUI) this.addUIToMapSpace(w.mapSpaceUI);
      } else {
        console.error(`${widgetClass} widget does not exist.`);
      }
    });
  }

  _setupVectorOverlay() {
    renderTransparent(true);
    this.vectorOverlay = new LayerGroup();
    this.map.addLayer(this.vectorOverlay);

    apply(this.vectorOverlay, this.config.vectorOverlay)
      .then((eh) => {
        getLayer(this.vectorOverlay, 'addresses').updateWhileInteracting_ = true;
        getLayer(this.vectorOverlay, 'addresses').updateWhileAnimating_ = true;
      });
  }
}
