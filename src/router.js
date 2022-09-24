import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutPage from './components/AboutPage.vue'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import SignPage from './components/RegisterPage.vue'
import MovieDetail from './components/MovieDetail.vue'
import store from './store/store'


Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:HomePage,
            beforeEnter(to,from,next){
                if(store.getters.isAuthenticated){
                    next()
                }
                else{
                    next("/")
                }
                
            }
        },
        {
            path:'/about',
            component :AboutPage,
            beforeEnter(to,from,next){
                if(store.getters.isAuthenticated){
                    next()
                }
                else{
                    next("/")
                }
                

            }
        },
        {
            path:'/',
            component:LoginPage
        },
        {
            path:'/register',
            component:SignPage
        },
         { path : "/:id", component : MovieDetail },
         {
            path : "*", redirect : "/home"
         }
    
    
    ],
    mode:'history'
})

