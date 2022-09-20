import Vue from 'vue'
import App from './App.vue'
import {router} from '../src/router'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Vuelidate from 'vuelidate'
// import VueI18n from 'vue-i18n'
import i18n from './locales/index'


Vue.use(Vuelidate);

Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  i18n,
  router,
  
}).$mount('#app')