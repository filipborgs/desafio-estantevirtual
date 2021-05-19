<template>
  <Main>
    <template v-slot:title> Endereços </template>
    <template v-slot:actions>
      <b-button class="text-center" :to="{ name: 'cadastrar_endereco' }"
        >Cadastrar Endereço</b-button
      >
    </template>
    <template v-slot:body> <EnderecosTable /> </template>
  </Main>
</template>

<script>
import EnderecosTable from "../components/endereco/EnderecosTable";
export default {
  components: {
    EnderecosTable,
  },
};
</script>

<style></style>
