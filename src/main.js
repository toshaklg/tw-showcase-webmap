import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { 
    CoHamburgerMenu,
    IoSettingsOutline,
    HiSolidQuestionMarkCircle,
    RiCheckboxCircleLine ,
    BiFileText,
    BiArrowDownShort,
    BiArrowUpShort,
    BiArrowLeftShort,
    BiArrowRightShort,
    BiPlusCircleDotted,
    BiLayoutSidebarInset,
    BiExclamationDiamond,
    RiLoader5Line,
    RiLoader2Line,
    RiCheckLine,
    HiPlus,
    IoInfiniteSharp,
    HiPlusSm,
    HiMinusSm,
 } from "oh-vue-icons/icons"

addIcons(
    CoHamburgerMenu,
    IoSettingsOutline,
    HiSolidQuestionMarkCircle,
    RiCheckboxCircleLine ,
    BiFileText,
    BiArrowDownShort,
    BiArrowUpShort,
    BiArrowLeftShort,
    BiArrowRightShort,
    BiPlusCircleDotted,
    BiLayoutSidebarInset,
    BiExclamationDiamond,
    RiLoader5Line,
    RiLoader2Line,
    RiCheckLine,
    HiPlus,
    IoInfiniteSharp,
    HiPlusSm,
    HiMinusSm,
)

const app = createApp(App)
const pinia = createPinia()

app.component("v-icon", OhVueIcon)
app.use(pinia)
app.mount("#app")
