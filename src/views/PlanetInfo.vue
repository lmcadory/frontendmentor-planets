<template>
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

export default defineComponent({
  name: "Home",  
  components: { PlanetMobile, PlanetTablet },  
});
</script>
<style lang="scss" scoped>
.bg-blue {
  background-color: #070724;
}
</style>
