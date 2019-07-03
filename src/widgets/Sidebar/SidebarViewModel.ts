import Accessor from "esri/core/Accessor";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import MapView from "esri/views/MapView";


export interface SidebarParams {
}

@subclass("app.widgets.Sidebar.SidebarViewModel")
export default class SidebarViewModel extends declared(Accessor) {
  @property() name: String = "Slagathor";

  @property()
  _view: MapView;

  constructor(params?: Partial<SidebarParams>) {
    super(params);
    console.log('inside SidebarViewModel#constructor...');
  }

  buttonClickHandler() {
    console.log('Sidebar:',this._view);
  }
}
