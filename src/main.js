import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";
import { VueMaskDirective, VueMaskFilter } from "v-mask";
import Main from "./components/layout/main/Main.vue";
import store from "./store";
import "./custom/custom.scss";

Vue.directive("mask", VueMaskDirective);
Vue.filter("VMask", VueMaskFilter);

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("Main", Main);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
