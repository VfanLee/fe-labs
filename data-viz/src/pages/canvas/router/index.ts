import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    // 案例
    {
      path: '/demos',
      name: 'demos',
      children: [
        // 绘制
        {
          path: '/demos/draw',
          name: 'draw',
          component: () => import('../views/demos/draw/index.vue'),
        },
        // 电子签名
        {
          path: '/demos/electronic-signature',
          name: 'electronic-signature',
          component: () => import('../views/demos/electronic-signature.vue'),
        },
        // 图片裁切
        {
          path: '/demos/image-crop',
          name: 'image-crop',
          component: () => import('../views/demos/image-crop.vue'),
        },
      ],
    },
  ],
})

export default router
