import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import vuetify from "./plugins/vuetify";

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.http.options.root = "https://free-football-soccer-videos1.p.rapidapi.com/v1/";
Vue.http.headers.common['x-rapidapi-host'] = 'free-football-soccer-videos1.p.rapidapi.com';
Vue.http.headers.common['x-rapidapi-key'] = '6d0b8a918dmsh9ca26f9dc1d1fddp1d5c1bjsn14e97ff4a843';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
