import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    // 柱状图
    {
      path: '/bar',
      name: 'bar',
      children: [
        {
          path: '/bar/case1',
          name: 'bar-case1',
          component: () => import('../views/bar/case1.vue'),
        },
        {
          path: '/bar/case2',
          name: 'bar-case2',
          component: () => import('../views/bar/case2.vue'),
        },
      ],
    },
    // 折线图
    {
      path: '/line',
      name: 'line',
      children: [
        {
          path: '/line/case1',
          name: 'line-case1',
          component: () => import('../views/line/case1.vue'),
        },
        {
          path: '/line/case2',
          name: 'line-case2',
          component: () => import('../views/line/case2.vue'),
        },
      ],
    },
    // 饼图
    {
      path: '/pie',
      name: 'pie',
      children: [
        {
          path: '/pie/case1',
          name: 'pie-case1',
          component: () => import('../views/pie/case1.vue'),
        },
      ],
    },
    // 散点图
    {
      path: '/scatter',
      name: 'scatter',
      children: [
        {
          path: '/scatter/case1',
          name: 'scatter-case1',
          component: () => import('../views/scatter/case1.vue'),
        },
      ],
    },
  ],
})

export default router
