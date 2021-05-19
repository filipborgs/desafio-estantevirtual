import getState from "../../store/address/state";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state: getState(),
  actions,
  mutations,
  getters: {},
};
