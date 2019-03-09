<template>
  <div class="foodList">
    <ul>
      <!-- <li v-for="foodItem in foodList" v-bind:key="foodList.indexOf(foodItem)"> -->
      <!-- eslint-disable-next-line -->
      <FoodItem name="Salad" description="A ceasar salad." date="3/6/2019"/>
      <!-- eslint-disable-next-line -->
      <FoodItem name="Burger" description="Now that's a tasty burger." date="1/2/2019"/>
      <!-- eslint-disable-next-line -->
      <FoodItem name="Willy Wanka's Kandy" description="NEEEERDS!" date="12/23/2018"/>
      <!-- </li> -->
    </ul>
  </div>
</template>

<script>
import FoodItem from "@/components/food/FoodItem";

export default {
  name: "foodList",
  data() {
    return {
      foodList: []
    };
  },
  components: {
    FoodItem
  }
};
</script>

<style scoped>
.foodList {
  position: relative;
}

ul {
  position: absolute;
  width: 100vw;
  left: -2.5em;
}
</style>
