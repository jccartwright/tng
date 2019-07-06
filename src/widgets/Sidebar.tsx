import esri = __esri;

import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import MapView from "esri/views/MapView";
import { renderable, tsx } from "esri/widgets/support/widget";
import Widget from "esri/widgets/Widget";

import SidebarViewModel from "./Sidebar/SidebarViewModel";
import ZoomButton from "./ZoomButton";

const CSS = {
  base: "esri-widget sidebar-base"
};

@subclass("app.widgets.Sidebar")
export default class Sidebar extends declared(Widget) {
  @aliasOf("viewModel.name")
  @renderable()
  name = "";

  // TODO: vs. just @property()?
  @property({ type: MapView })
  view: MapView;

  @property({ type: SidebarViewModel })
  @renderable()
  private viewModel: SidebarViewModel = new SidebarViewModel();

  // ZoomButton does not yet have all the properties required to handle UI interactions
  private zoomButton: ZoomButton = new ZoomButton();

  constructor() {
    super();

    // TODO: hang on to handle and unwatch after being set?
    this.watch("view", mapView => {
      this.zoomButton.view = mapView;
    });
  }

  render() {
    return (
      <div class={CSS.base}>
        <p>SIDEBAR</p>
        {this.zoomButton.render()}
        <button
          bind={this}
          type="button"
          onclick={this.viewModel.buttonClickHandler}
        >
          Click Me2
        </button>
      </div>
    );
  }
}
