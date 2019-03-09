<template>
  <div class="foodList">
    <ul>
      <li v-for="foodItem in foodList" v-bind:key="foodList.indexOf(foodItem)">
        <!-- eslint-disable-next-line -->
        <FoodItem name="foodItem.name" description="foodItem.description" date="foodItem.date"/>
      </li>
    </ul>
  </div>
</template>

<script>
import FoodItem from "@/components/food/FoodItem";

const foodArrayExample = [
  {
    name: "Salad",
    description: "A ceasar salad.",
    date: "3/6/2019"
  },
  {
    name: "Burger",
    description: "Now that's a tasty burger.",
    date: "1/2/2019"
  },
  {
    name: "Willy Wanka's Kandy",
    description: "NEEEERDS!",
    date: "12/23/2018"
  }
];

export default {
  name: "foodList",
  data() {
    return {
      foodList: foodArrayExample
    };
  },
  components: {
    FoodItem
  }
};
</script>

<style scoped></style>
