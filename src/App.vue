<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
export default {
  name: "App",
  components: {
    HeaderComp,
  },
  created() {
    this.$store.dispatch("initAuth");
    this.$store.dispatch("fetchMovies");
    this.$store.dispatch("filterState");
    // this.$store.dispatch("getMovies");
  },
};
</script>

<style></style>
