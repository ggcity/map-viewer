import GeoJSON from 'ol/format/GeoJSON.js';
import Layer from 'ol/layer/Layer.js';
import Map from 'ol/Map.js';
import Source from 'ol/source/Source.js';
import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';
import View from 'ol/View.js';
import { fromLonLat, toLonLat } from 'ol/proj.js';
import { MapboxVectorLayer, getLayer, apply, applyStyle, getLayers, renderTransparent, getSource } from 'ol-mapbox-style';
import { VectorTile } from 'ol/layer.js';
import LayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import { Fill, Stroke, Style, RegularShape } from 'ol/style.js';
import { toFeature } from 'ol/render/Feature';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS.js';
import legendSymbol from './legend-symbol';
import svgTags from './legend-symbol/svgTags';
import RenderFeature from 'ol/render/Feature';
import mapboxgl from 'mapbox-gl';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCRipple } from '@material/ripple';
import { MDCList } from "@material/list";
import { MDCDrawer } from "@material/drawer";

import viewerStyles from './main.scss?inline';

export default class extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = /*html*/`
      <style>
        ${viewerStyles}

        :host, main, div#map {
          display: flex;
          width: 100%
        }

        div#map {
          width:100%;
        }

        #search-context {
          display: none;
          background-color: black;
        }
      </style>
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

      <header id="search-context" class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Close">close</button>
            <span class="mdc-top-app-bar__title">Contextual title</span>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Share">share</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Delete">delete</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Open menu">more_vert</button>
          </section>
        </div>
      </header>
      
      <main class="mdc-top-app-bar--fixed-adjust">
        <div id="map"></div>
      </main>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }


  connectedCallback() {
    // Instantiation
    // const topAppBarElement = this.shadowRoot.querySelector('.mdc-top-app-bar');
    // const topAppBar = new MDCTopAppBar(topAppBarElement);

    this.shadowRoot.querySelectorAll('.mdc-icon-button').forEach(b => (new MDCRipple(b)).unbounded = true);

    // const list = MDCList.attachTo(document.querySelector('.mdc-list'));
    // list.wrapFocus = true;
    const drawer = MDCDrawer.attachTo(this.shadowRoot.querySelector('.mdc-drawer'));
    this.shadowRoot.getElementById('menu').addEventListener('click', () => drawer.open=true); 

    this.shadowRoot.getElementById('search-btn').addEventListener('click', () => this.shadowRoot.getElementById('search-context').style.display = 'block')

    const mapContainer = this.shadowRoot.getElementById('map');

    const stroke = new Stroke({ color: 'red', width: 3 });
    const fill = new Fill({ color: 'rgba(255,0,0,0.2)' });
    const selectedPolygon = new Style({
      image: new RegularShape({
        fill: fill,
        stroke: stroke,
        points: 4,
        radius: 10,
        angle: Math.PI / 4,
      }),
    })

    const selectOverlay = new VectorLayer({
      source: new VectorSource(),
      style: selectedPolygon,
    });

    const center = [-117.960058, 33.778724];

    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2djaXR5IiwiYSI6ImNqNXpjM3czcjA4djIzMm4wOWQ0YjExMzcifQ.PeDOEiLNe7AkmhSa9ZK3aQ';
    const mbMap = new mapboxgl.Map({
      style: 'https://ggcity.org/tileserver/styles/standard/style.json',
      attributionControl: false,
      boxZoom: false,
      center: center,
      container: mapContainer,
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

    // const parcels = new MapboxVectorLayer({
    //   styleUrl: '/parcels.json'
    // });

    // const parcels = new VectorTile({declutter: true});
    // fetch('/parcels.json')
    //   .then(res => res.json())
    //   .then(glstyle => {
    //     applyStyle(parcels, glstyle);
    //   });

    renderTransparent(true);
    const city = new LayerGroup();

    const cd = new ImageLayer({
      // source: new ImageWMS({
      //   url: 'https://ggcity.org/geoserver/gis/wms',
      //   params: { 'LAYERS': 'gis:city.council_district_info' },
      //   serverType: 'geoserver'
      // })
    })

    const map = new Map({
      target: mapContainer,
      view: new View({
        center: fromLonLat(center),
        zoom: 13,
      }),
      layers: [mbLayer, city, selectOverlay, cd],
    });

    const view = map.getView();

    apply(city, '/demos/data-sources/city.json')
      .then((eh) => {
        getLayer(city, 'addresses').updateWhileInteracting_ = true;
        getLayer(city, 'addresses').updateWhileAnimating_ = true;

        const glStyle = eh.get('mapbox-style');

        // glStyle.layers.forEach(layer => {
        //   let tree = legendSymbol({ sprite: "", zoom: view.getZoom(), layer: layer });
        //   console.log('tree', tree);
        //   // console.log('element', asHtml(tree));
        //   document.getElementById('legend').appendChild(createElement2(tree))
        // })
      });

    let selectedFeatures = [];
    map.on('click', event => {
      map.getFeaturesAtPixel(event.pixel).forEach((feature) => {
        selectedFeatures.push(feature);
        selectOverlay.getSource().clear();

        selectedFeatures.forEach(sl => {
          if (sl instanceof RenderFeature) sl = toFeature(sl);
          selectOverlay.getSource().addFeature(sl);
        });
      })
    })

    function basemap() {
      const nearmap = new LayerGroup();
      apply(nearmap, '/nearmap.json')

      map.getLayers().insertAt(1, nearmap);
      map.removeLayer(mbLayer);
    }

    // setTimeout(basemap, 5000);

    function createElement2(elementData) {
      const { element, attributes, children } = elementData;
      //const svgElement = document.createElementNS("http://www.w3.org/2000/svg", element);
      let svgElement;
      if (svgTags.includes(element)) {
        svgElement = document.createElementNS("http://www.w3.org/2000/svg", element);
      } else {
        svgElement = document.createElement(element);
      }


      // Set attributes
      if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
          if (value && typeof value === 'object') {
            // If the attribute value is an object (e.g., style), handle it accordingly
            for (const [styleKey, styleValue] of Object.entries(value)) {
              svgElement.style[styleKey] = styleValue;
            }
          } else {
            svgElement.setAttribute(key, value);
          }
        }
      }

      // Append children
      if (children) {
        for (const childElementData of children) {
          const childElement = createElement2(childElementData);
          svgElement.appendChild(childElement);
        }
      }

      return svgElement;
    }

    // olms(map, 'style.json').then(map => {
    //   const glStyle = map.get('mapbox-style');
    //   const place_suburb = glStyle.layers.find(layer => layer.id === 'place_suburb');
    //   place_suburb.layout.visibility = 'visible';
    //   map.getAllLayers().find(layer => layer.get('mapbox-layers').includes('place_suburb')).changed();
    // });
  }
}