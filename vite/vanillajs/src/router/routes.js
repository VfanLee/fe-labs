const routes = [
  {
    path: "/demo1",
    component: () => import("@/pages/demo1.js"),
  },
  {
    path: "/demo2",
    component: () => import("@/pages/demo2.js"),
  },
];

export default routes;
