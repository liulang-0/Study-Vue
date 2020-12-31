import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//先安装 npm i element-ui -S
//再在此引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
