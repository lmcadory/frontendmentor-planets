import { createApp } from "vue";
import VueScreen from 'vue-screen';
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import 'bootstrap/scss/bootstrap.scss';


createApp(App).use(VueScreen, 'bootstrap').use(store).use(router).mount("#app");
