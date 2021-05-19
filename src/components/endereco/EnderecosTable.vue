<template>
  <table class="table">
    <thead class="thead">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Logradouro</th>
        <th scope="col">Bairro</th>
        <th scope="col">Cidade</th>
        <th scope="col">CEP</th>
        <th scope="col">UF</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(adr, index) in addresses" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ adr.logradouro }}</td>
        <td>{{ adr.bairro }}</td>
        <td>{{ adr.localidade }}</td>
        <td>{{ adr.cep }}</td>
        <td>{{ adr.uf }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import EnderecoMixin from "../../mixins/address";

export default {
  mixins: [EnderecoMixin],
};
</script>

<style></style>
