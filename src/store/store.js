import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { router } from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
    api_key: '2729e73997835bd6e2369217e8f102b1',
    movies: [],
    isSubmit : false ,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
    setMovies(state, payload){
      state.movies = payload;
    },
  },
  actions: {
    initAuth({commit}){
      let token = localStorage.getItem("token");
      if(token){
        commit("setToken",token)
        router.push("/home")
      }
      else{
        router.push("/")
        return false
      }
    },
    signUp({ commit },authData) {
        axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyTPu80Gn-QT3Phb7fomSc-d6sFkrn1mw",
            {
              email: authData.email,
              password: authData.password,
              retureSecureToken: true,
            }
          )
          .then((response) => {
              commit("setToken",response.data.idToken)
              console.log("Kullanici üye kaydı oluşturuldu.")
          });
      },

    login({ commit },authData) {
     return axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAyTPu80Gn-QT3Phb7fomSc-d6sFkrn1mw",
          {
            email: authData.email,
            password: authData.password,
            retureSecureToken: true,
          }
        )
        .then((response) => {
            commit("setToken",response.data.idToken)
            localStorage.setItem("token",response.data.idToken)
        
          });
    },
    logout({ commit,}) {
      commit("clearToken")
      localStorage.removeItem("token")
    },
        fetchMovies({state, commit}){
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${state.api_key}&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then(data => data.json())
        .then(data => {
          commit('setMovies', data.results);
        })
    },
    searchMovies({ state,commit},payload){
      let config=payload;
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=2729e73997835bd6e2369217e8f102b1&query=${config.text}`)
        .then(data => data.json())
        .then(data => {
          commit('setMovies', data.results);
        })
        if(payload.text==null){
          console.log("arama kısmı boş olmamalı")
        }
        state.isSubmit = payload.changeSubmitStatus;
    },

    getMovies({dispatch},payload){
      if(payload){
        dispatch("searchMovies",payload);
        console.log("getMovies çalıştı")
      }
      else{
        dispatch("fetchMovies")
      }
    },
    fetchMovie({state}, id){
      return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${state.api_key}&language=tr-TR`)
        .then(data => data.json())
    },

  },
  getters: {
    isAuthenticated(state){
        return state.token !== ""
    },
    getMovies(state){
      return state.movies;
    },
    
  },
});

export default store;
