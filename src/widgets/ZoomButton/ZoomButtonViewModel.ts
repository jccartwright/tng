import Accessor from "esri/core/Accessor";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import MapView from "esri/views/MapView";

@subclass("app.widgets.ZoomButton.ZoomButtonViewModel")
export default class ZoomButtonViewModel extends declared(Accessor) {
  @property() locationString = "-105,40";

  constructor(params?: any) {
    super();
  }

  parseCoordinateString(): number[] {
    const coordArray = this.locationString.split(",");
    const x = parseFloat(coordArray[0]);
    const y = parseFloat(coordArray[1]);
    return [x, y];
  }

  panToLocation(mapView: MapView, coordinates: number[]) {
    // mapView.goTo(coordinates);
    mapView.goTo({ center: coordinates, zoom: 8 });
  }
}
