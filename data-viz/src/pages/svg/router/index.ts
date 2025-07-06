import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/basic',
      name: 'basic',
      children: [
        {
          path: '/basic/rect',
          name: 'basicRect',
          component: () => import('../views/basic/Rect.vue'),
        },
      ],
    },
    {
      path: '/animation',
      name: 'animation',
      component: () => import('../views/AnimationView.vue'),
    },
  ],
});

export default router;
