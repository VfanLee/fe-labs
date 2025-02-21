import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/v-model",
    name: "v-model",
    component: () =>
      import(/* webpackChunkName: "v-model" */ "@/views/v-model/v-model.vue"),
    redirect: "/v-model/basic",
    children: [
      {
        path: "basic",
        name: "v-model-basic",
        component: () =>
          import(
            /* webpackChunkName: "v-model-basic" */ "@/views/v-model/basic/basic.vue"
          ),
      },
      {
        path: "multi-value",
        name: "v-model-multi-value",
        component: () =>
          import(
            /* webpackChunkName: "v-model-multi-value" */ "@/views/v-model/multi-value/multi-value.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
