import { createRouter, createWebHistory } from 'vue-router'
import posTit from '../components/posTit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: posTit
    },
    
  ]
})

export default router
