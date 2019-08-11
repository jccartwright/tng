import { tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "top-nav",
  title: "top-nav-title"
};

interface HeaderProperties {
  appName: string;
  appVersion: string;
}

export const Header = (props: HeaderProperties) => (
  <header class={CSS.base}>
    <a
      href="https://www.ncei.noaa.gov/"
      title="National Centers for Environmental Information, National Oceanic and Atmospheric Administration"
    >
      <img
        src="./assets/map-banner.png"
        alt="National Centers for Environmental Information, National Oceanic and Atmospheric Administration"
        height="50px"
        style="vertical-align:middle; padding:3px 5px; margin-right:100px"
      ></img>
    </a>
    <span class={CSS.title}>{props.appName}</span>
  </header>
);
