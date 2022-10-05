<template>
  <div class="main-page">
    <h3 v-if="!isSubmit" class="text-white text-center p-3">Popüler Filmler</h3>
    <h3 v-if="isSubmit" class="text-white text-center p-3">Arama Sonuçları</h3>
      <div class="container d-flex align-items-center justify-content-center flex-column" >
          <span class="text-white mb-3">Filtrelemek İstediğiniz Imdb Puanını Seçiniz : </span>

          <div class="slidecontainer d-flex align-items-center justify-content-center">
              <input type="range" min="1" max="10" class="slider" v-model="myRange" id="myRange">
          </div>
          <span class="text-white my-3">Imdb Puanı : {{this.myRange}}</span>
          <button @click="filterSetS" class="btn btn-secondary d-flex align-item-center justify-content-center mt-3">Filtrele</button>

      </div>
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
    return {
    myRange : null,
    };
  },
  components: {
    MovieCard,
  },
    methods:{

        filterSetS(){
            // console.log('selam')
            this.$store.dispatch("filterMovieRange",this.myRange)
        }
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

.slider {
    -webkit-appearance: none;
    width: 350px;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04AA6D;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04AA6D;
    cursor: pointer;
}



.main-page {
  background-color: black;
}
.card-height {
  min-height: 100%;
  max-height: 100%;
}
</style>
