import ZoomButtonViewModel from "../../../../src/widgets/ZoomButton/ZoomButtonViewModel";

import { mock, verify, anything, instance } from "ts-mockito";

import MapView from "esri/views/MapView";


const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("app/widgets/ZoomButton/ZoomButtonViewModel", () => {
  let vm: ZoomButtonViewModel;

  beforeEach(() => {
    vm = new ZoomButtonViewModel();
  });

  
  test("pans to the point", () => {
    const mockedView: MapView = mock(MapView);
    const view = instance(mockedView);
    vm.panToLocation(view, [-105.0, 40.0]);
    verify(mockedView.goTo(anything())).called();
  });
});
