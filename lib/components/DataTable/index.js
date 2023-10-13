export default class {
  constructor(viewer, selectedFeatures) {
    const dataTableWidgetButton = document.createElement('button');
    dataTableWidgetButton.classList.add('material-symbols-rounded', 'mdc-top-app-bar__action-item', 'mdc-icon-button', 'mdc-ripple-surface');
    dataTableWidgetButton.ariaLabel = 'Data Table';
    dataTableWidgetButton.title = 'Data Table';
    dataTableWidgetButton.textContent = 'toc';



    dataTableWidgetButton.addEventListener('click', (event) => {
      if (this._dataTableActivated) {
        dataSpace.destroy();
      }
      event.target.classList.add('widget-button-selected');
      this._viewer.addUIToMapSpace(dataSpace);
      this._selectedFeatures.forEach((feature) => {
        const card = document.createElement('div');
        card.classList.add('mdc-card');
        card.innerHTML = /*html*/`
          <div class="mdc-card__primary-action">
            <div class="mdc-card__media mdc-card__media--square">
              <div class="mdc-card__media-content">Title</div>
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

        dataSpaceContent.appendChild(card);
      });
    });
  }

  _setupDataSpace() {
    this._dataSpace = document.createElement('section');
    const dataSpaceHeader = document.createElement('section');
    this._dataSpaceContent = document.createElement('section')
    this._dataSpace.appendChild(dataSpaceHeader);
    this._dataSpace.appendChild(this._dataSpaceContent)

    this._dataSpace.classList.add('data-space');
    dataSpaceHeader.classList.add('data-space-header');
    this._dataSpaceContent.classList.add('data-space-content')
  }
}