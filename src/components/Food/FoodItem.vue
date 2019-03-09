<template>
  <div class="foodItem">
    <h1>{{ foodName }}</h1>
    <p>{{ foodDescription }}</p>
    <p>{{ dateAdded }}</p>
  </div>
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
