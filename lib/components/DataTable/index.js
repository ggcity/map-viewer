import { Collection } from 'ol';
import MapViewer from '../MapViewer';
import Select from '../Select';

export default class {
  /**
   * Constructor for Data Table
   * @param {Select} select Select instance
   */
  constructor(select) {
    this.select = select;
    this.renderData = this.renderData.bind(this);
  }

  get widgetButton() {
    if (this._widgetButton) return this._widgetButton;

    this._widgetButton = document.createElement('button');
    this._widgetButton.classList.add('material-symbols-rounded', 'mdc-top-app-bar__action-item', 'mdc-icon-button', 'mdc-ripple-surface');
    this._widgetButton.ariaLabel = 'Data Table';
    this._widgetButton.title = 'Data Table';
    this._widgetButton.textContent = 'toc';

    this._widgetButton.addEventListener('click', this.toggleDataSpace.bind(this));

    return this._widgetButton;
  }

  get dataSpace() {
    if (this._dataSpace) return this._dataSpace;

    this._dataSpace = document.createElement('section');
    const dataSpaceHeader = document.createElement('section');
    this._dataSpaceContent = document.createElement('section');
    this._dataSpace.appendChild(dataSpaceHeader);
    this._dataSpace.appendChild(this._dataSpaceContent);

    this._dataSpace.classList.add('data-space');
    dataSpaceHeader.classList.add('data-space-header');
    this._dataSpaceContent.classList.add('data-space-content');

    return this._dataSpace;
  }

  layerFilter() {
    return (layer) => {
      return true;
    };
  }

  toggleDataSpace(event) {
    if (this._dataTableActivated) {
      this.destroyDataSpace(event);
    } else {
      this.activateDataSpace(event);
    }
  }

  activateDataSpace(event) {
    // Activated button CSS
    if (event) event.target.classList.add('widget-button-selected');
    else this.widgetButton.classList.add('widget-button-selected');

    // Add to viewer
    this.select.viewer.addUIToMapSpace(this.dataSpace);

    // Add a listener for selected feature
    this.select.selectedFeatures.on(['add', 'remove'], this.renderData);
    // Render initial data
    this.renderData();

    this._dataTableActivated = true;
  }

  destroyDataSpace(event) {
    if (event) event.target.classList.remove('widget-button-selected');
    else this.widgetButton.classList.remove('widget-button-selected');

    this.dataSpace.remove();
    this.select.selectedFeatures.un(['add', 'remove'], this.renderData);

    this._dataTableActivated = false;
  }

  renderData() {
    this._dataSpaceContent.replaceChildren();

    this.select.selectedFeatures.forEach((feature) => {
      const mapboxLayer = feature.get('mapbox-layer');
      const layerSource = (mapboxLayer && mapboxLayer['source-layer']) ? mapboxLayer['source-layer'] : mapboxLayer.source;

      const card = document.createElement('div');
      card.classList.add('mdc-card');
      card.innerHTML = /*html*/`
        <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--square">
            <div class="mdc-card__media-content">${layerSource}</div>
          </div>
          <!-- ... additional primary action content ... -->
          <div class="mdc-card__ripple"></div>
        </div>
        <div class="mdc-card__actions">
          <div class="mdc-card__action-buttons">
            <button class="mdc-button mdc-card__action mdc-card__action--button">
              <div class="mdc-button__ripple"></div>
              <span class="mdc-button__label">Zoom to</span>
            </button>
          </div>
        </div>
      `;

      this._dataSpaceContent.appendChild(card);
    });
  }
}
