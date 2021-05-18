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
      <tr v-for="(adr, index) in [...getAddres, ...getAddres]" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{adr.logradouro}}</td>
        <td>{{adr.bairro}}</td>
        <td>{{adr.localidade}}</td>
        <td>{{adr.cep}}</td>
        <td>{{adr.uf}}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  computed: {
    getAddres() {
      return [
        {
          cep: "44021-215",
          logradouro: "Avenida Eduardo Fróes da Mota",
          complemento: "",
          bairro: "Sobradinho",
          localidade: "Feira de Santana",
          uf: "BA",
          ibge: "2910800",
          gia: "",
          ddd: "75",
          siafi: "3515",
        },
      ];
    },
  },
};
</script>

<style></style>
