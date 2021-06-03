<template>
  <b-modal id="modal-1" v-model="modal" title="Endereço" hide-footer>
    <div v-if="modal">
      <p>{{ addresses[index].logradouro }}</p>
      <p>{{ addresses[index].bairro + " - " + addresses[index].cep }}</p>
      <p>{{ addresses[index].localidade + " - " + addresses[index].uf }}</p>
      <p>{{ addresses[index].complemento }}</p>
    </div>
    <b-button class="mt-3" block>Editar</b-button>
  </b-modal>
</template>

<script>
import EnderecoMixin from "../../../mixins/address";

export default {
  mixins: [EnderecoMixin],
  props: {
    index: {
      type: [Number],
      default: null,
    },
  },
  watch: {
    index(val) {
      console.log(val);
    },
  },
  computed: {
    modal: {
      get() {
        return Number.isInteger(this.index);
      },
      set(val) {
        if (val === false) this.$emit("close");
      },
    },
  },
};
</script>

<style></style>
