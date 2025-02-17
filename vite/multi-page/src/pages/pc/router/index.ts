import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL + 'pc.html'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@pc/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@pc/views/AboutView.vue'),
    },
  ],
})

export default router
