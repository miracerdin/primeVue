import "primevue/resources/themes/lara-light-green/theme.css";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
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

const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara,
    //apply preset
});
app.use(ToastService);
app.use(router);

app.directive("styleclass", StyleClass);

app.component("Button", Button);
app.component("InputText", InputText);
app.component("Toast", Toast);
app.component("InputSwitch", InputSwitch);
app.mount("#app");
