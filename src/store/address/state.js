export default () => ({
  address: {
    uf: null,
    logradouro: null,
    cep: null,
    bairro: null,
    localidade: null,
    complemento: null,
  },

  addresses: JSON.parse(localStorage.getItem("addresses")) || [],
});
