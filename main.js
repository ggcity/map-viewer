import GeoJSON from 'ol/format/GeoJSON.js';
import HeatmapLayer from 'ol/layer/Heatmap.js';
import Layer from 'ol/layer/Layer.js';
import Map from 'ol/Map.js';
import Source from 'ol/source/Source.js';
import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';
import View from 'ol/View.js';
import {fromLonLat, toLonLat} from 'ol/proj.js';
import {MapboxVectorLayer, getLayer, apply, applyStyle, getLayers, renderTransparent, getSource} from 'ol-mapbox-style';
import {VectorTile} from 'ol/layer.js';
import LayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import {Fill, Stroke, Style} from 'ol/style.js';
import {toFeature} from 'ol/render/Feature';


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
const parcels = new LayerGroup();


const map = new Map({
  target: 'map',
  view: new View({
    center: fromLonLat(center),
    zoom: 12,
  }),
  layers: [mbLayer, parcels, selectOverlay],
});

apply(parcels, '/parcels.json')
  .then((eh) => {
    console.log(eh);
    console.log('source', getSource(parcels, 'gg-source'))
  });

let selectedFeatures = [];
map.on('click', event => {
  map.getFeaturesAtPixel(event.pixel).forEach((feature) => {
    selectedFeatures.push(feature);
    selectOverlay.getSource().clear();

    selectedFeatures.forEach(sl => {
      selectOverlay.getSource().addFeature(toFeature(sl));
    });
  })
})

function basemap () {
  const nearmap = new LayerGroup();
  apply(nearmap, '/nearmap.json')

  map.getLayers().insertAt(1, nearmap);
  map.removeLayer(mbLayer);
}

setTimeout(basemap, 5000);
