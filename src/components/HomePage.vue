<template>
  <div class="main-page">
    <h3 v-if="!isSubmit" class="text-white text-center p-3">Popüler Filmler</h3>
    <h3 v-if="isSubmit" class="text-white text-center p-3">Arama Sonuçları</h3>
      <div class="container">
          <div class="slidecontainer">
              <input type="range" min="1" max="10" class="slider" v-model="myRange" id="myRange">
              {{this.myRange}}
          </div>
          <button @click="filterSetS" class="btn btn-primary">Filtrele</button>

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
    myRange : null
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
.slidecontainer {
    width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 25px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #04AA6D; /* Green background */
    cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #04AA6D; /* Green background */
    cursor: pointer; /* Cursor on hover */
}
.main-page {
  background-color: black;
}
.card-height {
  min-height: 100%;
  max-height: 100%;
}
</style>
