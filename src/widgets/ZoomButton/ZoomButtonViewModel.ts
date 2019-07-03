import Accessor from "esri/core/Accessor";

import { declared, property, subclass } from "esri/core/accessorSupport/decorators";
import MapView from "esri/views/MapView";


@subclass("app.widgets.ZoomButton.ZoomButtonViewModel")
export default class ZoomButtonViewModel extends declared(Accessor) {

  @property() view: MapView;

  @property() locationString = "-105,40";

  constructor(params?: any) {
    super();
    console.log('inside ZoomButtonViewModel#constructor...');
  }

  panToLocation(mapView:MapView, coordinateString:String) {

  }

  
  buttonClickHandler() {
    //parse string
    // const coordArray = this.locationString.split(",");
    // const x = parseFloat(coordArray[0]);
    // const y = parseFloat(coordArray[1]);

    //pan to location
    console.log('ZoomButton: ',this.view);
  }
}
