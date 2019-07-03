import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import Widget from "esri/widgets/Widget";
import MapView from "esri/views/MapView";
import ZoomButtonViewModel from "./ZoomButton/ZoomButtonViewModel";


const CSS = {
  base: "esri-widget zoombutton-base"
};

@subclass("app.widgets.ZoomButton")
export default class ZoomButton extends declared(Widget) {

  @aliasOf("viewModel.locationString")
  @renderable()
  locationString = "";

  @aliasOf("viewModel.view")
  view: MapView;

  @property({
    type: ZoomButtonViewModel
  })
  @renderable()
  viewModel: ZoomButtonViewModel = new ZoomButtonViewModel();

  constructor() {
    super();
    console.log('inside ZoomButton#constructor...');
  }

  render() {
    return (
      <div class={CSS.base}>
        <button
            bind={this}
            type="button"
            onclick={this.viewModel.buttonClickHandler}>
              Click Me
          </button>
      </div>
    );
  }

}
