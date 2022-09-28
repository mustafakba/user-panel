<template>
  <div class="main-page">
    <h3 v-if="!isSubmit" class="text-white text-center p-3">Popüler Filmler</h3>
    <h3 v-if="isSubmit" class="text-white text-center p-3">Arama Sonuçları</h3>
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <MovieCard
          class="col-md-6 col-lg-4 col-sm-6-mx-2 p-5 card-height align-items-center justify-content-center"
          :movie="item"
          v-for="(item, index) in movie"
          :key="index"
        ></MovieCard>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    MovieCard,
  },
  computed: {
    movie: {
      get() {
        return this.$store.state.movies;
      },
      set() {},
    },
    isSubmit() {
      return this.$store.state.isSubmit;
    },
  },
};
</script>

<style scoped>
.main-page {
  background-color: black;
}
.card-height {
  min-height: 100%;
  max-height: 100%;
}
</style>
