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
        // this.$store.dispatch("getMovies");
    },

};
</script>

<style>
#bv-modal-example___BV_modal_content_ {
    background-color: rgb(10, 5, 5);
}

.modal-title {
    color: aliceblue;
}

.close {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.form-control input {
}
</style>
