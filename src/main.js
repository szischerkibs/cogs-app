import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Constants from "@/plugins/constants";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  Constants,
  render: (h) => h(App),
}).$mount("#app");
