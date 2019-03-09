<template>
  <li class="foodItem">
    <h1>{{ foodName }}</h1>
    <p>{{ foodDescription }}</p>
    <p>{{ dateAdded }}</p>
  </li>
</template>

<script>
export default {
  name: "foodItem",
  props: ["name", "description", "date"],
  data() {
    return {
      foodName: this.name,
      foodDescription: this.description,
      dateAdded: this.date
    };
  }
};
</script>

<style scoped>
.foodItem {
  list-style: none;
  border: 0.3vh solid black;
  border-radius: 1em;
  margin: 2em 0.5em;
  padding: 2em 2em;
}

.foodItem:hover {
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .foodItem {
    margin: 2vh 20%;
    padding: 2vh 2vh;
  }
}
</style>
