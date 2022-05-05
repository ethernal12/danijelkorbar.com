import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import BiographyView from '../views/BiographyView.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: HomeView
    
  },
  {
    path: '/contact',
  

    component: ContactView
  },
  {
    path: '/biography',
    component: BiographyView
    
  },
  {
    path: '/about',
    component: AboutView
    
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
