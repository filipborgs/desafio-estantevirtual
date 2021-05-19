import getState from "./state";

export default {
  ADD_ADDRESS(state) {
    state.addresses.push({ ...state.address });
  },

  UPDATE_ADDRESS(state, index) {
    state.addresses[index] = { ...state.address };
  },

  RESET_ADDRESS(state){
      state.address = getState().address;
  }
};
