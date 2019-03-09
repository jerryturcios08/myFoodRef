<template>
  <div class="foodList">
    <ul>
      <i class="fas fa-plus-circle fa-3x"></i>
      <!-- <li v-for="foodItem in foodList" v-bind:key="foodList.indexOf(foodItem)"> -->
      <!-- eslint-disable-next-line -->
      <FoodItem name="Salad" description="A ceasar salad." date="3/6/2019"/>
      <!-- eslint-disable-next-line -->
      <FoodItem name="Burger" description="Now that's a tasty burger." date="9/23/1994"/>
      <!-- eslint-disable-next-line -->
      <FoodItem
        name="Willy Wanka's Kandy"
        description="We are the music-makers and we are the dreamers of dreams"
        date="6/30/1971"
      />
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
i {
  color: rgb(51, 122, 246);
  margin: 0.5em 0;
}

i:hover {
  cursor: pointer;
}

.foodList {
  position: relative;
}

ul {
  position: absolute;
  width: 100vw;
  left: -2.5em;
}
</style>
