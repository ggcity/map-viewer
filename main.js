import GeoJSON from 'ol/format/GeoJSON.js';
import HeatmapLayer from 'ol/layer/Heatmap.js';
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
import { Fill, Stroke, Style } from 'ol/style.js';
import { toFeature } from 'ol/render/Feature';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS.js';
import legendSymbol from './js/lib/legend-symbol';
import svgTags from './js/lib/legend-symbol/svgTags'

window.addEventListener('load', () => {
  navigator.serviceWorker
    .register(
      import.meta.env.MODE === 'production' ? '/sw.js' : '/dev-sw.js?dev-sw',
      { type: import.meta.env.MODE === 'production' ? 'classic' : 'module' }
    )
    .then((registration) => console.log('Service worker registered'))
});


const selectedPolygon = new Style({
  stroke: new Stroke({
    color: 'rgba(200,20,20,0.8)',
    width: 5,
  }),
  fill: new Fill({
    color: 'rgba(200,20,20,0.4)',
  }),
});

const selectOverlay = new VectorLayer({
  source: new VectorSource(),
  style: selectedPolygon,
});

const center = [-117.940869, 33.777326];

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2djaXR5IiwiYSI6ImNqNXpjM3czcjA4djIzMm4wOWQ0YjExMzcifQ.PeDOEiLNe7AkmhSa9ZK3aQ';
const mbMap = new mapboxgl.Map({
  style: 'https://ggcity.org/tileserver/styles/standard/style.json',
  attributionControl: false,
  boxZoom: false,
  center: center,
  container: 'map',
  doubleClickZoom: false,
  dragPan: false,
  dragRotate: false,
  interactive: false,
  keyboard: false,
  pitchWithRotate: false,
  scrollZoom: false,
  touchZoomRotate: false,
});

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
  target: 'map',
  view: new View({
    center: fromLonLat(center),
    zoom: 14,
  }),
  layers: [mbLayer, city, selectOverlay, cd],
});

const view = map.getView();

apply(city, '/city.json')
  .then((eh) => {
    getLayer(city, 'addresses').updateWhileInteracting_ = true;
    getLayer(city, 'parcels-lines').updateWhileInteracting_ = true;

    const glStyle = eh.get('mapbox-style');

    glStyle.layers.forEach(layer => {
      let tree = legendSymbol({ sprite: "", zoom: view.getZoom(), layer: layer });
      console.log('tree', tree);
      // console.log('element', asHtml(tree));
      document.getElementById('legend').appendChild(createElement2(tree))
    })
  });

let selectedFeatures = [];
map.on('click', event => {
  map.getFeaturesAtPixel(event.pixel).forEach((feature) => {
    selectedFeatures.push(feature);
    selectOverlay.getSource().clear();

    selectedFeatures.forEach(sl => {
      console.log(sl)
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

function attrReplace(attrs) {
  const out = {};
  Object.entries(attrs).forEach(([k, v]) => {
    k = k.replace(/-./g, (i) => {
      return i.slice(1).toUpperCase();
    });
    out[k] = v;
  });
  return out;
}

function asHtml(tree) {
  if (!tree) return null;
  return createElement(
    tree.element,
    attrReplace(tree.attributes),
    (tree.children ? tree.children.map(asHtml) : undefined)
  );
}

// function attrReplace(attributes) {
//   const replacedAttributes = {};

//   for (const [key, value] of Object.entries(attributes)) {
//     if (key === 'style' && typeof value === 'object') {
//       // If the attribute is 'style' and the value is an object, convert it to a string
//       let styleString = '';
//       for (const [styleKey, styleValue] of Object.entries(value)) {
//         styleString += `${styleKey}: ${styleValue};`;
//       }
//       replacedAttributes[key] = styleString;
//     } else {
//       // Otherwise, keep the attribute as is
//       replacedAttributes[key] = value;
//     }
//   }

//   return replacedAttributes;
// }

function createElement(tagName, attributes, children) {
  let element;
  if (['svg', 'circle', 'defs'].includes(tagName)) {
    element = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  } else {
    element = document.createElement(tagName);
  }

  // Set attributes
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      if (typeof value === 'object') {
        // If the attribute value is an object (e.g., style), handle it accordingly
        for (const [styleKey, styleValue] of Object.entries(value)) {
          element.style[styleKey] = styleValue;
        }
      } else {
        element.setAttribute(key, value);
      }
    }
  }

  // Append children
  if (children) {
    for (const child of children) {
      if (child instanceof HTMLElement) {
        element.appendChild(child);
      } else if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      }
    }
  }

  return element;
}

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