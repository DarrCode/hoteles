import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/hotel/:id',
      name: 'hotel',
      component: () => import('@/views/HotelView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404View.vue')
    }
  ]
})

export default router
