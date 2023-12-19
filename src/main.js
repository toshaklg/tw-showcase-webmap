import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { 
    CoHamburgerMenu,
    IoSettingsOutline,
    HiSolidQuestionMarkCircle,
    BiFileText,
    BiArrowDownShort,
    BiArrowUpShort,
    BiPlusCircleDotted,
    BiLayoutSidebarInset,
 } from "oh-vue-icons/icons"

addIcons(
    CoHamburgerMenu,
    IoSettingsOutline,
    HiSolidQuestionMarkCircle,
    BiFileText,
    BiArrowDownShort,
    BiArrowUpShort,
    BiPlusCircleDotted,
    BiLayoutSidebarInset,
)

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

const app = createApp(App)
app.component("v-icon", OhVueIcon)
app.mount("#app")
