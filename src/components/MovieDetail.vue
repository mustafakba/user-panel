<template>
  <div
    class="MovieDetail"
    :style="{
      background:
        'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), center ,url(http://image.tmdb.org/t/p/original' +
        movie.backdrop_path +
        ')',
    }"
  >
    <div class="container">
      <router-link to="/home">Ana Sayfaya Dön</router-link>
      <div class="MovieDetail-title">
        <h1>{{ movie.original_title }}</h1>
      </div>
      <div class="MovieDetail-vote">
        <p>Ortalama Oy: {{ movie.vote_average }}</p>
      </div>
      <div class="MovieDetail-desc">
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      movie: {},
    };
  },

  created() {
    this.$store.dispatch("fetchMovie", this.id).then((data) => {
      this.movie = data;
    });
  },
};
</script>

<style scoped>
* {
  color: aliceblue;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
}
.MovieDetail {
  width: 100%;
  height: 100vh;
  background: center, no-repeat, fixed;
  background-size: cover;
}
</style>
