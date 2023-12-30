import { createApp } from 'vue'
import { createPinia } from 'pinia'
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
    BiArrowLeftShort,
    BiArrowRightShort,
    BiPlusCircleDotted,
    BiLayoutSidebarInset,
    BiExclamationDiamond,
 } from "oh-vue-icons/icons"

addIcons(
    CoHamburgerMenu,
    IoSettingsOutline,
    HiSolidQuestionMarkCircle,
    BiFileText,
    BiArrowDownShort,
    BiArrowUpShort,
    BiArrowLeftShort,
    BiArrowRightShort,
    BiPlusCircleDotted,
    BiLayoutSidebarInset,
    BiExclamationDiamond,
)

const app = createApp(App)
const pinia = createPinia()

app.component("v-icon", OhVueIcon)
app.use(pinia)
app.mount("#app")
