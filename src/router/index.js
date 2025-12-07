import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import Home from '@/pages/Home.vue'
import Builder from '@/pages/Builder.vue'
import Cart from '@/pages/Cart.vue' // <-- IMPORTANT

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/builder',
      name: 'builder',
      component: Builder,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
  ],
})

export default router
