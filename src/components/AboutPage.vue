<template>
  <div>
    <button @click="deneme">Buraya bas</button>
  </div>
</template>

<script>
export default {
  methods: {
    deneme() {
      this.$store.dispatch("filterState");
    },
  },
};
</script>
