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
};
</script>

<style></style>
