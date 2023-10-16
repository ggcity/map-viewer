import {MDCMenuSurface} from '@material/menu-surface';
import MapViewer from '../MapViewer';

export default class {
  /**
   * Add various components for basemaps
   * @param {MapViewer} viewer The Map Viewer component
   * @returns void
   */
  constructor(viewer) {
  }

  get widgetButton() {
    if (this._widgetButton) return this._widgetButton;

    this._widgetButton = document.createElement("button");
    this._widgetButton.textContent = "share";

    // Set up events
    this._widgetButton.addEventListener('click', (event) => {
      // this.mapSpaceUI.classList.toggle('ui-show')
      //this.menu.open();
    });

    return this._widgetButton;
  }
}
