import esri = __esri;

import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { tsx } from "esri/widgets/support/widget";

import FeatureLayer from "esri/layers/FeatureLayer";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Widget from "esri/widgets/Widget";

import AppViewModel, { AppParams } from "./App/AppViewModel";
import Footer from "./Footer";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

interface AppViewParams extends AppParams, esri.WidgetProperties {}

const CSS = {
  base: "main",
  webmap: "webmap"
};

@subclass("app.widgets.App")
export default class App extends declared(Widget) {
  @property() viewModel = new AppViewModel();

  @aliasOf("viewModel.appName") appName: string;

  @aliasOf("viewModel.featureLayer") featureLayer: FeatureLayer;

  @aliasOf("viewModel.map") map: EsriMap;

  @aliasOf("viewModel.view") view: MapView;

  constructor(params: Partial<AppViewParams>) {
    super(params);
  }

  render() {
    return (
      <div class={CSS.base}>
        {Header({ appName: this.appName })}
        {new Sidebar().render()}
        <div class={CSS.webmap} bind={this} afterCreate={this.onAfterCreate} />
        {new Footer().render()}
      </div>
    );
  }

  private onAfterCreate(element: HTMLDivElement) {
    import("./../data/app").then(({ featureLayer, map }) => {
      this.featureLayer = featureLayer;
      this.map = map;
      this.view = new MapView({
        map: this.map,
        container: element
      });
    });
  }
}
