<template>
  <div>
    <v-calendar :attributes="attrs"></v-calendar>
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>
<script>
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
var database = firebase.database();
</script>

<script>
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var day = currentDate.getDate();

export default {
  name: "Calendar",
  data() {
    return {
      attrs: [
        {
          key: "today",
          dates: new Date(year, month, day),

          highlight: {
            backgroundColor: "#ff8080"
          },
          // Just use a normal style
          contentStyle: {
            color: "#fafafa"
          },
          // Our new popover here
          popover: {
            label: "Breakfast: cheese"
          }
        }
      ]
    };
  }
};
</script>
