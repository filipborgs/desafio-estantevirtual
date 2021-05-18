<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Desafio Estante Virtual</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li
          v-for="(menu, index) in getMenu"
          :key="index"
          class="nav-item active"
        >
          <b-link class="nav-link" :to="{ name: menu.router }"
            >{{ menu.name }}
          </b-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    getMenu() {
      return [
        { name: "Home", router: "home" },
        { name: "Endereços", router: "enderecos" },
        { name: "Sobre", router: "about" },
      ];
    },
  },
};
</script>

<style></style>
