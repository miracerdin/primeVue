import "primevue/resources/themes/lara-light-green/theme.css";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { defaultConfig, plugin } from "@formkit/vue";
import config from "../formkit.config";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./index.css";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import InputSwitch from "primevue/inputswitch";
import ToastService from "primevue/toastservice";
import Lara from "../src/presets/lara";
import router from "./router";
import StyleClass from "primevue/styleclass";
import Dialog from "primevue/dialog";
import Toolbar from "primevue/toolbar";
import { createPinia } from "pinia";
import Tag from "primevue/tag";
import Rating from "primevue/rating";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import AutoComplete from "primevue/autocomplete";
import Breadcrumb from "primevue/breadcrumb";
import Calendar from "primevue/calendar";

const pinia = createPinia();
const app = createApp(App);

app.use(plugin, defaultConfig(config));
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara,
    //apply preset
});
app.use(ToastService);
app.use(router);
app.use(pinia);

app.directive("styleclass", StyleClass);

app.component("Button", Button);
app.component("InputText", InputText);
app.component("Toast", Toast);
app.component("InputSwitch", InputSwitch);
app.component("Dialog", Dialog);
app.component("Toolbar", Toolbar);
app.component("Tag", Tag);
app.component("Rating", Rating);
app.component("DataViewLayoutOptions", DataViewLayoutOptions);
app.component("AutoComplete", AutoComplete);
app.component("Breadcrumb", Breadcrumb);
app.component("DataView", DataView);
app.component("Calendar", Calendar);

app.mount("#app");
