<template>
  <Nav />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Nav.vue";

export default defineComponent({
  components: { Nav },
  // setup() {

  // },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap');

body {
  font-family: Spartan;
  font-weight: 400;
  font-size: .875rem;
  line-height: 1.563rem;
}

</style>
