<template>
  <Main>
    <template v-slot:title> Cadastrar Endereço </template>

    <template v-slot:actions>
      <b-button>Cancelar</b-button>
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
};
</script>

<style></style>
