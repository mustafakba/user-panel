<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary shadow px-5">
    <a class="navbar-brand" href="#">Ubit </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" tag="li">
          <router-link class="nav-link" :class="logoutClass" to="/home" tag="a">
            {{ $t("message.home") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="logoutClass"
            to="/about"
            tag="a"
          >
            {{ $t("message.about") }}
          </router-link>
        </li>
        <div
          @submit.prevent
          class="nav-item searchBar d-flex align-items-center justify-content-center"
        >
          <div
            class="search-svg d-flex align-items-center justify-content-center"
          >
            <img src="../../src/img/searchIcon.svg" alt="" />
            <input
              @input="changeText"
              type="text"
              v-model="searchText"
              placeholder="Search Movie , Actor"
            />
          </div>
        </div>
      </ul>
      <ul class="navbar-nav my-lg-0 ms-auto">
        <li class="nav-item mx-3">
          <a
            @click.prevent="logout"
            :class="logoutClass"
            class="nav-link"
            href="#"
            >{{ $t("message.logout") }}</a
          >
        </li>
        <li
          class="nav-item selectLang d-flex align-items-center justify-content-center"
        >
          <select v-model="language" @change="changeLang()" class="" href="#">
            <option value="tr">TR</option>
            <option value="en">EN</option>
          </select>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      searchText: null,
      language: null,
      isSubmit: false,
    };
  },
  computed: {
    logoutClass() {
      return {
        "d-none": !this.$store.getters.isAuthenticated,
      };
    },
  },
  methods: {
    changeText() {
      this.isSubmit = true;
      this.$store.dispatch("getMovies", {
        text: this.searchText,
        changeSubmitStatus: this.isSubmit,
      });
      this.isSubmit = true;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
    changeLang() {
      localStorage.setItem("lang", this.language);
      window.location.reload();
    },
  },
  created() {
    if (localStorage.getItem("lang") == null) {
      localStorage.setItem("lang", "tr");
    }
    this.language = localStorage.getItem("lang");
  },
};
</script>
<style scoped>
.selectLang select {
  border: none;
  color: #fff;
  background: transparent;
}
.selectLang select option {
  background: #000;
}
.searchBar input {
  width: 300px;
  height: 35px;
  /* position: absolute; */
}
input {
  padding: 0px 30px;
  border: none;
  border-radius: 8px;
}
input:focus {
  border: none;
}
::placeholder {
  font-size: 14px;
}
.searchBar img {
  position: relative;
  left: 25px;
  z-index: 99;
  width: 14px;
  height: 14px;
}
</style>
