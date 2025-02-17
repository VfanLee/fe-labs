import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL + 'mobile.html'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@mobile/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@mobile/views/AboutView.vue'),
    },
  ],
})

export default router
