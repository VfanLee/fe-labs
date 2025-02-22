import "@/styles/index.scss";

import Vue from "vue";
import elementUi from "./plugins/element-ui";
import router from "./router";

import App from "./App.vue";
import Layout from "@/components/Layout/index.vue";

Vue.config.productionTip = false;
Vue.component("Layout", Layout);
Vue.use(elementUi);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
