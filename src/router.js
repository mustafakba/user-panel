import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutPage from './components/AboutPage.vue'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import SignPage from './components/RegisterPage.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:HomePage,
        },
        {
            path:'/about',
            component :AboutPage
        },
        {
            path:'/',
            component:LoginPage
        },
        {
            path:'/register',
            component:SignPage
        }
    
    ],
    mode:'history'
})

