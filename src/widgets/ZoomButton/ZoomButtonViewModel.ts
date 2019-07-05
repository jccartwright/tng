import Accessor from "esri/core/Accessor";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

import Point from "esri/geometry/Point";
import MapView from "esri/views/MapView";

@subclass("app.widgets.ZoomButton.ZoomButtonViewModel")
export default class ZoomButtonViewModel extends declared(Accessor) {
  @property() view: MapView;

  @property() locationString = "-105,40";

  constructor(params?: any) {
    super();
    console.log("inside ZoomButtonViewModel#constructor...");
  }

  panToLocation(mapView: MapView, coordinates: number[]) {
    // TODO: why is Autocast not working here?
    // mapView.center = coordinates;

    const centerPoint: Point = new Point({
      longitude: coordinates[0],
      latitude: coordinates[1]
    });
    mapView.center = centerPoint;
  }

  buttonClickHandler = () => {
    const coordArray = this.locationString.split(",");
    const x = parseFloat(coordArray[0]);
    const y = parseFloat(coordArray[1]);
    this.panToLocation(this.view, [x, y]);
  };
}
