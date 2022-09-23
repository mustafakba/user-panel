import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { router } from "./router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
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
  },
  getters: {
    isAuthenticated(state){
        return state.token !== ""
    }
  },
});

export default store;
