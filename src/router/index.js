import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Galleries from '../views/Galleries.vue'
import Contact from '../views/Contact.vue'
import Mountain from '../views/galleries/MountainShoot.vue'

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
    component: Galleries,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router