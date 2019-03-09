<template>
  <div id="app">
    <div>
      <b-tabs card>
        <b-tab title="Tab 1" active>
          <!-- <b-card-text>Tab Contents 1</b-card-text> -->
        </b-tab>
        <b-tab title="Tab 2">
          <!-- <b-card-text>Tab Contents 1</b-card-text> -->
        </b-tab>
      </b-tabs>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div>-->
    <!-- eslint-disable-next-line -->
    <!-- <router-view/> -->
  </div>
</template>

<style>
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
