<template>
  <div class="foodList">
    <ul>
      <li v-for="foodItem in foodList" v-bind:key="foodList.indexOf(foodItem)">
        {{ foodItem }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "foodList",
  data() {
    return {
      foodList: []
    };
  }
};
</script>

<style scoped></style>
