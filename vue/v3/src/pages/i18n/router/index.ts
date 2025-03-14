import { createRouter, createWebHashHistory } from 'vue-router'
import i18n from '@i18n/i18n'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'home',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'about',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  document.title = i18n.global.t(to.meta.title as string)
})

export default router
