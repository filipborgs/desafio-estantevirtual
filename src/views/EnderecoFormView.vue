<template>
  <Main>
    <template v-slot:title>
      {{ editMode ? "Editar" : "Cadastrar" }} Endereço
    </template>

    <template v-slot:actions>
      <b-button :to="{ name: 'enderecos' }">Cancelar</b-button>
    </template>

    <template v-slot:body>
      <EnderecoForm />
    </template>

    <template v-slot:footer>
      <b-button @click="submit" block variant="primary">Salvar</b-button>
    </template>
  </Main>
</template>

<script>
import EnderecoForm from "../components/endereco/EnderecoForm";
import EnderecoMixin from "../mixins/address";
export default {
  components: {
    EnderecoForm,
  },
  mixins: [EnderecoMixin],

  methods: {
    async submit() {
      if (!this.address.cep) {
        alert("Insira um CEP");
        return;
      }
      const teste = await this.saveAddress(this.$route.params.pos);
      console.log(teste);
      console.log(this.addresses);
    },
  },

  computed: {
    editMode() {
      return /editar/.test(this.$route.name);
    },
  },
};
</script>

<style></style>
