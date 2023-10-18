import { MDCDataTable } from '@material/data-table';

import { Collection } from 'ol';
import MapViewer from '../MapViewer';
import Select from '../Select';

const IGNORED_FIELDS = [
  'mapbox-layer',
  'geometry'
];

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

    const data = {};
    this.select.selectedFeatures.forEach((feature) => {
      const props = feature.getProperties();
      const layerName = this._getLayerName(feature);
      if (!data[layerName]) {
        data[layerName] = {
          keys: Object.keys(props).filter(field => !IGNORED_FIELDS.includes(field)),
          records: []
        };
      }

      data[layerName].records
        .push(data[layerName].keys.map((key) => props[key]));
    });

    for (const layerName in data) {
      const section = document.createElement('section');
      section.classList.add('data-space-table');
      
      const h2 = document.createElement('h2');
      h2.textContent = this._titleize(layerName);
      section.appendChild(h2);

      const table = this._constructTable(data[layerName]);
      section.appendChild(table);

      this._dataSpaceContent.appendChild(section);
      //const mdcDataTable = new MDCDataTable(table);
    }
  }

  _constructTable(data) {
    const container = document.createElement('div');
    container.classList.add('mdc-data-table', 'data-space-table');

    const table = document.createElement('table');
    table.classList.add('mdc-data-table__table');

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    tbody.classList.add('mdc-data-table__content');
    table.appendChild(thead);
    table.appendChild(tbody);

    // Create the <tr> element for the header row
    const headerRow = document.createElement('tr');
    headerRow.classList.add('mdc-data-table__header-row');

    for (const columnId of data.keys) {
      headerRow.appendChild(this._createHeaderCell(columnId));
    }
    thead.appendChild(headerRow);

    for (const row of data.records) {
      const tr = document.createElement('tr');
      tr.classList.add('mdc-data-table__row');

      for (const field of row) {
        const td = document.createElement('td');
        td.classList.add('mdc-data-table__cell');
        td.textContent = field;
        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    }

    container.appendChild(table);
    return container;

    container.innerHTML = /*html*/`
    <table class="mdc-data-table__table" aria-label="Dessert calories">
    <thead>
      <tr class="mdc-data-table__header-row">
        <th
          class="mdc-data-table__header-cell mdc-data-table__header-cell--with-sort"
          role="columnheader"
          scope="col"
          aria-sort="none"
          data-column-id="dessert"
        >
          <div class="mdc-data-table__header-cell-wrapper">
            <div class="mdc-data-table__header-cell-label">
              Dessert
            </div>
            <button class="mdc-icon-button material-symbols-rounded mdc-data-table__sort-icon-button"
                    aria-label="Sort by dessert" aria-describedby="dessert-status-label">arrow_upward</button>
            <div class="mdc-data-table__sort-status-label" aria-hidden="true" id="dessert-status-label">
            </div>
          </div>
        </th>
        <th
          class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric mdc-data-table__header-cell--with-sort mdc-data-table__header-cell--sorted"
          role="columnheader"
          scope="col"
          aria-sort="ascending"
          data-column-id="carbs"
        >
          <div class="mdc-data-table__header-cell-wrapper">
            <button class="mdc-icon-button material-symbols-rounded mdc-data-table__sort-icon-button"
                    aria-label="Sort by carbs" aria-describedby="carbs-status-label">arrow_upward</button>
            <div class="mdc-data-table__header-cell-label">
              Carbs (g)
            </div>
            <div class="mdc-data-table__sort-status-label" aria-hidden="true" id="carbs-status-label"></div>
          </div>
        </th>
        <th
          class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric mdc-data-table__header-cell--with-sort"
          role="columnheader"
          scope="col"
          aria-sort="none"
          data-column-id="protein"
        >
          <div class="mdc-data-table__header-cell-wrapper">
            <button class="mdc-icon-button material-symbols-rounded mdc-data-table__sort-icon-button"
                    aria-label="Sort by protein" aria-describedby="protein-status-label">arrow_upward</button>
            <div class="mdc-data-table__header-cell-label">
              Protein (g)
            </div>
            <div class="mdc-data-table__sort-status-label" aria-hidden="true" id="protein-status-label"></div>
          </div>
        </th>
        <th
          class="mdc-data-table__header-cell"
          role="columnheader"
          scope="col"
          data-column-id="comments"
        >
          Comments
        </th>
      </tr>
    </thead>
    <tbody class="mdc-data-table__content">
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell">Frozen yogurt</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
          24
        </td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
          4.0
        </td>
        <td class="mdc-data-table__cell">Super tasty</td>
      </tr>
    </tbody>
  </table>
  `;

    return container;
  }

  // Create each <th> element for the header cells
  _createHeaderCell(dataColumnId) {
    const text = dataColumnId;
    const classList = ['mdc-data-table__header-cell', 'mdc-data-table__header-cell--with-sort'];

    const th = document.createElement('th');
    th.classList.add(...classList);
    th.setAttribute('role', 'columnheader');
    th.setAttribute('scope', 'col');
    th.setAttribute('aria-sort', 'none');
    th.setAttribute('data-column-id', dataColumnId);

    const cellWrapper = document.createElement('div');
    cellWrapper.classList.add('mdc-data-table__header-cell-wrapper');

    const cellLabel = document.createElement('div');
    cellLabel.classList.add('mdc-data-table__header-cell-label');
    cellLabel.textContent = this._titleize(text);

    const sortButton = document.createElement('button');
    sortButton.classList.add('mdc-icon-button', 'material-symbols-rounded', 'mdc-data-table__sort-icon-button');
    sortButton.setAttribute('aria-label', `Sort by ${text.toLowerCase()}`);
    sortButton.setAttribute('aria-describedby', `${dataColumnId}-status-label`);
    sortButton.textContent = 'arrow_upward';

    const sortStatusLabel = document.createElement('div');
    sortStatusLabel.classList.add('mdc-data-table__sort-status-label');
    sortStatusLabel.setAttribute('aria-hidden', 'true');
    sortStatusLabel.setAttribute('id', `${dataColumnId}-status-label`);

    cellWrapper.appendChild(cellLabel);
    cellWrapper.appendChild(sortButton);
    cellWrapper.appendChild(sortStatusLabel);
    th.appendChild(cellWrapper);

    return th;
  }

  _renderCards(feature) {
    const mapboxLayer = feature.get('mapbox-layer');
    const layerName = this._getLayerName(feature);

    const card = document.createElement('div');
    card.classList.add('mdc-card');
    card.innerHTML = /*html*/`
      <div class="mdc-card__primary-action">
        <div class="mdc-card__media mdc-card__media--square">
          <div class="mdc-card__media-content">${layerName}</div>
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
  }

  _getLayerName(feature) {
    const mapboxLayer = feature.get('mapbox-layer');
    return (mapboxLayer && mapboxLayer['source-layer']) ? mapboxLayer['source-layer'] : mapboxLayer.source;
  }

  _titleize(machineName) {
    const parts = machineName.split('.');
    return parts[parts.length - 1].replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
}
