<template>
  <!-- <NavDesktop v-show="$grid.breakpoint === 'xl'" /> -->
  <NavTablet v-show="$grid.breakpoint === 'md'" />
  <NavMobile v-show="$grid.breakpoint === 'xs' || $grid.breakpoint === 'sm'" />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavMobile from "@/components/mobile/NavMobile.vue";
import NavDesktop from "./components/desktop/NavDesktop.vue";
import NavTablet from "./components/tablet/NavTablet.vue";

export default defineComponent({
  components: { NavMobile, NavTablet },  
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap");

body {
  font-family: Spartan;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.563rem;
}
</style>
