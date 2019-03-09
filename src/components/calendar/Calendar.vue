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
          dates: new Date(2019, 2, 9),
          highlight: {
            backgroundColor: "#ff8080"
          },
          // Just use a normal style
          contentStyle: {
            color: "#fafafa"
          },
          // Our new popover here
          popover: {
            label: "You just hovered over today's date!"
          }
        }
      ]
    };
  }
};
</script>
