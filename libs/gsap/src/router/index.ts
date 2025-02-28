import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/fundamentals',
      name: 'fundamentals',
      children: [
        {
          path: '/fundamentals/tween',
          name: 'fundamentals-tween',
          component: () => import('@/views/Fundamentals/TweenView.vue'),
        },
        {
          path: '/fundamentals/timeline',
          name: 'fundamentals-timeline',
          component: () => import('@/views/Fundamentals/TimelineView.vue'),
        },
        {
          path: '/fundamentals/easing',
          name: 'fundamentals-easing',
          component: () => import('@/views/Fundamentals/EasingView.vue'),
        },
      ],
    },
  ],
})

export default router
