<template>
  <div class="d-flex position-relative">
    <div class="item" style="max-width: 18rem">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + this.movie.poster_path"
        class=""
      />
      <div class="overlay">
        <h3 class="text d-flex flex-column">
          {{ this.movie.original_title }}
          <button @click.prevent="calisti" class="btn btn-outline-light mt-2">
            Detay
          </button>
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        return: {},
      },
    };
  },
  methods: {
    calisti() {
      console.log(this.movie.id + "li elemana tiklandi");
      this.$router.push("/" + this.movie.id);
    },
  },
  props: {
    movie: {
      default: {},
    },
  },
  created() {},
};
</script>

<style scoped>
.item {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #003445;
}
.item:hover .overlay {
  opacity: 0.7;
}

img {
  /* Benim stiller  */
  /* width: 280px;
  height: 400px;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
  display: block; */
  transition: all 0.2s ease-in-out;
  height: 400px;
  width: 280px;
  display: block;
  height: auto;
}
.text {
  color: rgb(255, 255, 255);
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
