import Vue from "vue";
import Vuex from "vuex";
import address from "./address";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    teste: 123123,
  },
  actions: {},
  mutations: {},
  getters: {},
  modules: { address },
});
