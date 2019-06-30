import Accessor from "esri/core/Accessor";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

@subclass("widgets.Footer.FooterViewModel")
export default class FooterViewModel extends declared(Accessor) {
  @property() name = "Slagathor";

  constructor(params?: any) {
    super();
  }
}
