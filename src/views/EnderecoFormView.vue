<template>
  <Main>
    <template v-slot:title>
      {{ editMode ? "Editar" : "Cadastrar" }} Endereço
    </template>

    <template v-slot:actions>
      <b-button :to="{ name: 'enderecos' }">Cancelar</b-button>
    </template>

    <template v-slot:body>
      <b-form @submit="onSubmit" @reset="onReset"> <EnderecoForm /> </b-form>
    </template>

    <template v-slot:footer>
      <b-button block variant="primary">Salvar</b-button>
    </template>
  </Main>
</template>

<script>
import EnderecoForm from "../components/endereco/EnderecoForm";
export default {
  components: {
    EnderecoForm,
  },

  methods: {
    onSubmit() {},
    onReset() {},
  },

  computed: {
    editMode() {
      return /editar/.test(this.$route.name);
    },
  },
};
</script>

<style></style>
