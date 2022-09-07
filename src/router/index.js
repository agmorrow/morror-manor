import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Galleries from '../views/Galleries.vue'
import Inquire from '../views/Inquire.vue'

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/galleries',
    name: 'Galleries',
    component: Galleries
  },
  {
    path: '/inquire',
    name: 'Inquire',
    component: Inquire
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router