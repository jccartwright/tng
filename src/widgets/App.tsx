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

  appVersion: string;

  sidebar: Sidebar = new Sidebar();
  footer: Footer = new Footer();

  constructor(params: Partial<AppViewParams>) {
    super(params);
  }

  render() {
    return (
      <div class={CSS.base}>
        {Header({ appName: this.appName, appVersion: this.appVersion })}
        {this.sidebar.render()}
        <div class={CSS.webmap} bind={this} afterCreate={this.onAfterCreate} />
        {this.footer.render()}
      </div>
    );
  }

  private onAfterCreate(element: HTMLDivElement) {
    // variable set in webpack config
    this.appVersion = VERSION;

    console.log(`Running App version ${this.appVersion}`);

    import("./../data/app").then(({ featureLayer, map, appProperties }) => {
      this.featureLayer = featureLayer;
      this.map = map;
      this.view = new MapView({
        map: this.map,
        container: element
      });
      this.appName = appProperties.appName;

      // TODO: better to set as property or pass in constructor?
      this.sidebar.view = this.view;
    });
  }
}
