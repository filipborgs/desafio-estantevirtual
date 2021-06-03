<template>
  <div>
    <b-table hover :fields="fields" :items="addresses" @row-clicked="setIndex">
    </b-table>
    <ModalEndereco v-if="index >= 0" :index="index" @close="index = null" />
  </div>
</template>

<script>
import EnderecoMixin from "../../mixins/address";
import ModalEndereco from "../layout/modal/ModalEndereco.vue";

export default {
  mixins: [EnderecoMixin],
  components: {
    ModalEndereco,
  },
  data() {
    return {
      index: null,
      fields: [
        { key: "logradouro", label: "Logradouro" },
        { key: "bairro", label: "Bairro" },
        { key: "localidade", label: "Cidade" },
        { key: "cep", label: "CEP" },
        { key: "uf", label: "UF" },
      ],
    };
  },
  methods: {
    setIndex(_, index) {
      this.index = index;
    },
  },
};
</script>

<style></style>
