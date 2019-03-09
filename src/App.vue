<template>
  <div id="app">
    <div id="header">
      <i class="far fa-user-circle fa-2x"></i>
      <p id="brand-name">myFoodRef</p>
    </div>
    <b-tabs card>
      <b-tab title="Food" active>
        <!-- eslint-disable-next-line -->
        <FoodList/>
      </b-tab>
      <b-tab title="Goal">
        <!-- eslint-disable-next-line -->
        <Goal/>
      </b-tab>
      <b-tab title="Calendar">
        <!-- eslint-disable-next-line -->
        <Calendar/>
      </b-tab>
    </b-tabs>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div>-->
    <!-- eslint-disable-next-line -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Calendar from "@/components/calendar/Calendar";
import FoodList from "@/components/food/FoodList";
import Goal from "@/components/goal/Goal";

export default {
  name: "App",
  components: {
    Calendar,
    FoodList,
    Goal
  }
};
</script>

<style scoped>
i {
  float: left;
  padding: 1vh 2vh;
}

p {
  padding: 1vh 2vh;
  text-align: right;
  font-weight: bold;
}

#brand-name {
  margin: 0vh;
}

#header {
  background-color: rgb(247, 247, 247);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
