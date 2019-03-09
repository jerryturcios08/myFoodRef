<template>
  <div>
    <v-calendar :attributes="attrs"></v-calendar>
  </div>
</template>

<script>
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var day = currentDate.getDate();

export default {
  name: "Calendar",
  data() {
    return {
      attrs: [
        {
          key: "today",
          dates: new Date(year, month, day),
          //dates: new Date(2019, 2, 13),
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
