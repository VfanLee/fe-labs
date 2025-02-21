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
      redirect: { name: 'basic' },
      children: [
        {
          path: 'basic',
          name: 'basic',
          component: () => import('@/views/v-model/basic/basic.vue'),
        },
        {
          path: 'multi-value',
          name: 'multi-value',
          component: () => import('@/views/v-model/multi-value/multi-value.vue'),
        },
      ],
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('@/views/components/index.vue'),
      redirect: { name: 'secondary-packaging' },
      children: [
        {
          path: 'secondary-packaging',
          name: 'secondary-packaging',
          component: () => import('@/views/components/secondary-packaging/secondary-packaging.vue'),
        },
      ],
    },
    {
      path: '/perf-opt',
      name: 'perf-opt',
      component: () => import('@/views/perf-opt/index.vue'),
      redirect: { name: 'v-lazy' },
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
