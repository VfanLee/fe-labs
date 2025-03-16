import "element-ui/lib/theme-chalk/index.css";
import { Button, Input } from "element-ui";

export default {
  install(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
  },
};
