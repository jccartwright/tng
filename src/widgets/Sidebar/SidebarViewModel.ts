import Accessor from "esri/core/Accessor";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

@subclass("app.widgets.Sidebar.SidebarViewModel")
export default class SidebarViewModel extends declared(Accessor) {
  @property() name = "Slagathor";

  constructor(params?: any) {
    super();
  }
}
