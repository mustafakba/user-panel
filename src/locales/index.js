import Vue from 'vue'
import VueI18n from 'vue-i18n'

import tr from './tr/index'
import en from './en/index'

Vue.use(VueI18n);

const messages ={
    en,
    tr
}

export default new VueI18n({
    locale:"tr",
    messages,
})
