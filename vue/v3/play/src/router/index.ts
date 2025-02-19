import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: () => import('@/views/v-model/index.vue'),
      children: [
        {
          path: '',
          name: 'v-model-basic',
          component: () => import('@/views/v-model/v-model-basic/v-model-basic.vue'),
        },
      ],
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('@/views/components/index.vue'),
      children: [
        {
          path: '',
          name: 'secondary-packaging',
          component: () => import('@/views/components/secondary-packaging/secondary-packaging.vue'),
        },
      ],
    },
  ],
})

export default router
