import Vue from 'vue'
import App from './App.vue'
import {router} from '../src/router'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'
import i18n from './locales/index'
import store from '../src/store'
import axios from 'axios'
import { BootstrapVue } from 'bootstrap-vue'



Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  i18n,
  router,
  store,
  axios
  
}).$mount('#app')
