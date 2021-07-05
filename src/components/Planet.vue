<template>
  <div class="h1">
    {{ planet.name }}
  </div>  
</template>
<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';
import planetData from '@/data/data.json';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: "Mercury"
    }
  },
  setup(props) {

    const { name } = toRefs(props);

    console.log('name', name.value)

    const planet = computed(() => {
      return planetData.find(p => p.name.toLowerCase() === name.value)
    });

    return { planet };
  },
})
</script>
<style lang="scss" scoped>

</style>
