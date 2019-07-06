import Accessor from "esri/core/Accessor";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

@subclass("app.widgets.Sidebar.SidebarViewModel")
export default class SidebarViewModel extends declared(Accessor) {
  @property() name: string = "Slagathor";

  constructor() {
    super();
  }

  testme() {
    alert("Sidebar button clicked");
  }

  buttonClickHandler = () => {
    this.testme();
  };
}
