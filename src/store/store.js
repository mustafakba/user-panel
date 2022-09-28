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
      console.log(payload)
      console.log(state.movies)
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
      return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${state.api_key}&l anguage=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then(data => data.json())
        .then(data => {
          console.log("fetchMovies then bloğu")
          commit('setMovies', data.results);
        }).catch(err=>{
          console.log('FetchMovies',err)
        })
    },
    searchMovies({ state,commit},payload){
      let config=payload;
      console.log(config)
      if(config.text==null || config.text == ''){
        console.log('config.text')
        state.isSubmit = false;
        return
      }
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=${state.api_key}&query=${config.text}`)
        .then(data => data.json())
        .then(data => {
          commit('setMovies', data.results);
        })
        if(payload.text==null){
          console.log("arama kısmı boş olmamalı")
        }
        state.isSubmit = true;
    },


    fetchMovie({state}, id){
      return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${state.api_key}&language=tr-TR`)
        .then(data => data.json())
    },
    filterState({state,commit,dispatch},payload){
      console.log("2 kere")
      let lang = payload 
      dispatch("fetchMovies").then(()=>{
        
        let mapItem = state.movies 
        console.log('mapItem', mapItem)
        let newArr = mapItem.filter((movie)=>{
          console.log(movie.original_language)
        if(movie.original_language == lang ){
          return movie
        }
        })
        commit('setMovies',newArr)
      })
      
      
    }

  },
  getters: {
    isAuthenticated(state){
        return state.token !== ""
    },
  },
});

export default store;

