import { createRouter, createWebHistory } from 'vue-router'
import PollyXavier from '@/modules/galleries/PollyXavier'


const routes = [
  {
    children: [
      {
        path: '/polly-xavier',
        name: 'PollyXavier',
        component: PollyXavier,
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router