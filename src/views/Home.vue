<template>
  <Main>
    <template v-slot:title>
      Olá
    </template>
    <template v-slot:body>
      Bem vindo ao sistema de gerenciamento de endereços
    </template>
    <template v-slot:footer>
      <b-link href="#" class="card-link">Endereços</b-link>
      <b-link href="#" class="card-link">Cadastrar Endereço</b-link>
    </template>
  </Main>
</template>

<script>
export default {
  name: 'Home',
}
</script>
