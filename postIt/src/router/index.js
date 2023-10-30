import { createRouter, createWebHistory } from 'vue-router'
import PostItList from '../components/PostItList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PostItList
    },
    
  ]
})

export default router
