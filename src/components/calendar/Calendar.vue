<template>
  <div>
    <v-calendar :attributes="attrs"></v-calendar>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      attrs: [
        {
          key: "today",
          highlight: {
            backgroundColor: "#ff8080"
            // Other properties are available too, like `height` & `borderRadius`
          },
          dates: new Date(2018, 0, 1)
        }
      ]
    };
  }
};
</script>
