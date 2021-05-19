export default {
  saveAddress({ commit, state }, index) {
    if (parseInt(index) >= 0) {
      commit("UPDATE_ADDRESS", index);
      alert("Atualizado com sucesso");
    } else {
      commit("ADD_ADDRESS");
      alert("Adicionado com sucesso");
    }
    commit("RESET_ADDRESS");
    localStorage.setItem("addresses", JSON.stringify(state.addresses));
    return true;
  },
};
