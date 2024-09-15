import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/composables',
    name: 'composables',
    component: () => import('../views/composables.vue'),
    meta: {
      title: '组合式函数',
    },
  },
  {
    path: '/directives',
    name: 'directives',
    component: () => import('../views/directives.vue'),
    meta: {
      title: '自定义指令',
    },
  },
  {
    path: '/plugins',
    name: 'plugins',
    component: () => import('../views/plugins.vue'),
    meta: {
      title: '插件',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
