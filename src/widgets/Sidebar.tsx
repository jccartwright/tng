import esri = __esri;

import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import MapView from "esri/views/MapView";
import Widget from "esri/widgets/Widget";

import SidebarViewModel, { SidebarParams } from "./Sidebar/SidebarViewModel";
import ZoomButton from "./ZoomButton";

// interface SidebarViewParams extends SidebarParams, esri.WidgetProperties{}

const CSS = {
  base: "esri-widget sidebar-base"
};

@subclass("app.widgets.Sidebar")
export default class Sidebar extends declared(Widget) {
  @aliasOf("viewModel.name")
  @renderable()
  name = "";

  @aliasOf("viewModel._view")
  _view: MapView;

  @property({
    type: SidebarViewModel
  })
  @renderable()
  viewModel: SidebarViewModel = new SidebarViewModel();

  private zoomButton: ZoomButton;

  constructor() {
    super();
    console.log("inside Sidebar#constructor");
    this.zoomButton = new ZoomButton();
  }

  set view(view: MapView) {
    console.log("inside Sidebar#view...");
    // TODO: setting the value of the alias doesn't propogate to the VM?
    // this._view = view;
    this.viewModel._view = view;
    console.log(this._view);
    console.log(this.viewModel._view);
    this.zoomButton.view = view;
  }

  render() {
    console.log("inside Sidebar#render...");
    console.log(this.viewModel._view);
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
