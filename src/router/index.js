import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Galleries from '../views/Galleries.vue'
import Contact from '../views/Contact.vue'
import PollyXavier from '../views/galleries/PollyXavier.vue'


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