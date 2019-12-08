import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import vuetify from "./plugins/vuetify";
import {LOGIN_FIREBASE} from '@/store/config.js'

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.http.options.root = LOGIN_FIREBASE;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
