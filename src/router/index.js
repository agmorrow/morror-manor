import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Galleries from '../pages/Galleries.vue'
import Contact from '../pages/Contact.vue'
import PollyXavier from '../pages/galleries/PollyXavier.vue'


const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/galleries',
    name: 'Galleries',
    component: Galleries,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/polly-xavier',
    name: 'PollyXavier',
    component: PollyXavier,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router