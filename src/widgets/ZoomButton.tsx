import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import MapView from "esri/views/MapView";
import { renderable, tsx } from "esri/widgets/support/widget";
import Widget from "esri/widgets/Widget";

import ZoomButtonViewModel from "./ZoomButton/ZoomButtonViewModel";

const CSS = {
  base: "esri-widget zoombutton-base"
};

@subclass("app.widgets.ZoomButton")
export default class ZoomButton extends declared(Widget) {
  @aliasOf("viewModel.locationString")
  @renderable()
  locationString = "";

  @property({ type: MapView })
  view: MapView;

  @property({ type: ZoomButtonViewModel })
  @renderable()
  viewModel: ZoomButtonViewModel = new ZoomButtonViewModel();

  constructor() {
    super();
  }

  buttonClickHandler = () => {
    const coords: number[] = this.viewModel.parseCoordinateString();
    this.viewModel.panToLocation(this.view, coords);
  };

  render() {
    return (
      <div class={CSS.base}>
        <button type="button" onclick={this.buttonClickHandler}>
          Click Me
        </button>
      </div>
    );
  }
}
