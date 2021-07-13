<template>
  <PlanetMobile class="vh-100 bg-blue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlanetMobile from "@/components/PlanetMobile.vue";

export default defineComponent({
  name: "Home",
  components: { PlanetMobile },
});
</script>
<style lang="scss" scoped>
.bg-blue {
  background-color: #070724;
}
</style>
