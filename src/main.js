import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VCalendar from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";

import App from "./App.vue";
import router from "./router";

import "./registerServiceWorker";

Vue.use(BootstrapVue);

// Use v-calendar, v-date-picker & v-popover components
Vue.use(VCalendar, {
  firstDayOfWeek: 2 // Monday
});

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
