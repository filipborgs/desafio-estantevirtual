<template>
  <div id="app" class="bg-secondary">
    <Navbar />
    <b-container class="mt-4" fluid="xl">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/layout/navbar/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  height: 100vh;
}
</style>