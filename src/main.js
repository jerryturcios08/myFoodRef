import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VCalendar from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";
import firebase from "firebase";

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

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAuTVqmdGYouPEpw9RK0OZnRET6-s5h4Lk",
  authDomain: "myfoodref.firebaseapp.com",
  databaseURL: "https://myfoodref.firebaseio.com",
  projectId: "myfoodref",
  storageBucket: "myfoodref.appspot.com",
  messagingSenderId: "1006747319700"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
