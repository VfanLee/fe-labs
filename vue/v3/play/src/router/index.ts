import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home-view.vue'),
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
    {
      path: '/perf-opt',
      name: 'perf-opt',
      component: () => import('@/views/perf-opt/index.vue'),
      children: [
        {
          path: 'v-lazy',
          name: 'v-lazy',
          component: () => import('@/views/perf-opt/v-lazy/v-lazy.vue'),
        },
      ],
    },
  ],
})

export default router
