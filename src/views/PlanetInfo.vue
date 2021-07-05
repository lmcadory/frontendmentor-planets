<template>
  <Planet />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Planet from '@/components/Planet.vue';

export default defineComponent({
  name: "Home",
  components: { Planet  },
});
</script>
