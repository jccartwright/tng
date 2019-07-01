import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import Widget from "esri/widgets/Widget";

import SidebarViewModel from "./Sidebar/SidebarViewModel";

const CSS = {
  base: "esri-widget sidebar-base"
};

@subclass("app.widgets.Sidebar")
export default class Sidebar extends declared(Widget) {
  @aliasOf("viewModel.name")
  @renderable()
  name = "";

  @property({
    type: SidebarViewModel
  })
  @renderable()
  viewModel: SidebarViewModel = new SidebarViewModel();

  render() {
    return (
      <div class={CSS.base}>
        <p>SIDEBAR</p>
      </div>
    );
  }
}
