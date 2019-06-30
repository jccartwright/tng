import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import Widget from "esri/widgets/Widget";

import FooterViewModel from "./Footer/FooterViewModel";

const CSS = {
  base: "esri-widget footer-base"
};

@subclass("widgets.Footer")
export default class Footer extends declared(Widget) {
  @aliasOf("viewModel.name")
  @renderable()
  name = "";

  @property({
    type: FooterViewModel
  })
  @renderable()
  viewModel: FooterViewModel = new FooterViewModel();

  render() {
    return (
      <div class={CSS.base}>
        <p>FOOTER</p>
      </div>
    );
  }
}
