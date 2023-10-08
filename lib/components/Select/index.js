import { Fill, Stroke, Style, RegularShape } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import RenderFeature from 'ol/render/Feature';
import { toFeature } from 'ol/render/Feature';
import Collection from 'ol/Collection.js';
import { fromLonLat, toLonLat, transformExtent } from 'ol/proj.js';


export default class {
  constructor(viewer) {
    viewer.addContextMenu(this.contextMenu);

    const stroke = new Stroke({ color: 'red', width: 3 });
    const fill = new Fill({ color: 'rgba(255,0,0,0.2)' });
    let selectedPolygon = new Style({
      image: new RegularShape({
        fill: fill,
        stroke: stroke,
        points: 4,
        radius: 10,
        angle: Math.PI / 4,
      }),
    });

    this._selectOverlay = new VectorLayer({
      source: new VectorSource(),
      style: selectedPolygon
    });

    viewer.map.once('postrender', event => event.target.addLayer(this._selectOverlay));

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

    viewer.map.on('click', event => {
      const features = event.target.getFeaturesAtPixel(event.pixel);
      if (features.length == 0) this._selectedFeatures.clear();

      features.forEach(f => this._selectedFeatures.push(f));
      console.log(this._selectedFeatures.getArray())
    })
  }

  clearSelections() {
    this._selectedFeatures.clear();
  }

  get contextMenu() {
    if (this._contextMenu) return this._contextMenu;

    this._contextMenu = document.createElement('header');
    this._contextMenu.classList.add('context-menu', 'mdc-top-app-bar', 'd-none');
    
    this._contextMenu.innerHTML = /*html*/`
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button id="close-select-context" class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-surface" aria-label="Close">close</button>
          <span class="mdc-top-app-bar__title">Contextual title</span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Share">share</button>
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Delete">delete</button>
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Open menu">more_vert</button>
        </section>
     </div>
    `;

    this._contextMenu.querySelector('#close-select-context').addEventListener('click', () => {
      this.clearSelections();
    });

    return this._contextMenu;
  }
}