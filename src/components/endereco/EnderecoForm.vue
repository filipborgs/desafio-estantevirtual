<template>
  <b-row>
    <b-col cols="6">
      <b-form-group
        label="CEP: "
        label-for="cep-input"
        description="Digite o seu CEP para buscar o endereço"
      >
        <b-form-input
          id="cep-input"
          v-model="address.cep"
          placeholder="Digite o CEP"
          v-mask="'#####-###'"
          @input="buscarCep"
          required
        ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col cols="6">
      <b-form-group label="Estado: " label-for="uf-input">
        <b-form-select
          class="form-control"
          id="uf-input"
          :disabled="!cepValid"
          v-model="address.uf"
          :options="ufs"
          value-field="sigla"
          text-field="nome"
        ></b-form-select>
      </b-form-group>
    </b-col>

    <b-col cols="12">
      <b-form-group label="Logradouro:" label-for="logradouro-input">
        <b-form-input
          id="logradouro-input"
          :disabled="!cepValid"
          v-model="address.logradouro"
          placeholder="Digite o Logradouro"
          required
        ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col cols="6">
      <b-form-group label="Bairro:" label-for="bairro-input">
        <b-form-input
          id="bairro-input"
          :disabled="!cepValid"
          v-model="address.bairro"
          placeholder="Digite o Bairro"
          required
        ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col cols="6">
      <b-form-group label="Cidade:" label-for="cidade-input">
        <b-form-input
          id="cidade-input"
          :disabled="!cepValid"
          v-model="address.localidade"
          placeholder="Digite o Cidade"
          required
        ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col cols="12">
      <b-form-group label="Complemento:" label-for="complemento-input">
        <b-form-input
          id="complemento-input"
          :disabled="!cepValid"
          v-model="address.complemento"
          placeholder="Digite o Complemento"
          required
        ></b-form-input>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import addressMixing from "../../mixins/address";

export default {
  mixins: [addressMixing],

  async mounted() {
    const { data } = await this.$axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );
    this.ufs = [{ sigla: null, nome: "Selecione uma UF" }, ...data];
  },

  data() {
    return {
      ufs: [],
    };
  },

  methods: {
    async buscarCep(cep) {
      if (!cep || cep.length != 9) return;

      const { data } = await this.$axios.get(
        `http://viacep.com.br/ws/${cep}/json`
      );

      for (const key in this.address) {
        this.address[key] = data[key];
      }
      console.log(this.address);
    },
  },

  computed: {
    cepValid() {
      return this.address.cep?.length == 9;
    },
  },
};
</script>

<style></style>
