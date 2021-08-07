<template>
  <PlanetDesktop
    class="bg-blue"
    v-show="$grid.breakpoint === 'xl' || $grid.breakpoint === 'xxl'"
  />
  <PlanetTablet class="vh-100 bg-blue" v-show="$grid.breakpoint === 'md'" />
  <PlanetMobile
    class="vh-100 bg-blue"
    v-show="$grid.breakpoint === 'xs' || $grid.breakpoint === 'sm'"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlanetMobile from "@/components/mobile/PlanetMobile.vue";
import PlanetTablet from "@/components/tablet/PlanetTablet.vue";
import PlanetDesktop from "@/components/desktop/PlanetDesktop.vue";

export default defineComponent({
  name: "Home",
  components: { PlanetMobile, PlanetTablet, PlanetDesktop },
});
</script>
<style lang="scss" scoped>
.bg-blue {
  background-color: #070724;
}
</style>
