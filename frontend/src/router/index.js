import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import BiographyView from '../views/BiographyView.vue'
import ExperienceView from '../views/ExperienceView.vue'
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
    path: '/experience',
    component: ExperienceView
    
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
