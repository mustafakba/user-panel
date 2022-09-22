import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
      axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAyTPu80Gn-QT3Phb7fomSc-d6sFkrn1mw",
          {
            email: authData.email,
            password: authData.password,
            retureSecureToken: true,
          }
        )
        .then((response) => {
            commit("setToken",response.data.idToken)
            console.log("kullanıcı girişi yapıldı")
        });
    },
    // logout({ commit, dispatch, state }) {},
  },
  getters: {},
});

export default store;
