<template>
  <div class="goal">
    <i class="fas fa-plus-circle fa-3x"></i>
  </div>
</template>

<script>
export default {
  name: "Goal",
  data() {
    return {
      goals: []
    };
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
</style>
