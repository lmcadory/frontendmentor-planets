<template>
  <div class="col info">
    <nav>
      <div
        class="nav nav-tabs justify-content-between"
        id="nav-tab"
        role="tablist"
      >
        <button
          class="nav-link text-uppercase active"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          overview
        </button>
        <button
          class="nav-link text-uppercase"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          structure
        </button>
        <button
          class="nav-link text-uppercase"
          id="nav-contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-contact"
          type="button"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
        >
          surface
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="text-center" :class="planet.name.toLowerCase()">
        <img
          :src="`../assets/planet-${planet.name.toLowerCase()}.svg`"
          :alt="planet.name"
        />
      </div>
      <div
        class="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="col">
          <div class="content">
            {{ planet.overview.content }}
          </div>
          <div class="source">
            {{ planet.overview.source }}
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <div class="col">
          <div class="content">
            {{ planet.structure.content }}
          </div>
          <div class="source">
            {{ planet.structure.source }}
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        <div class="col">
          <div class="content">
            {{ planet.geology.content }}
          </div>
          <div class="source">
            {{ planet.geology.source }}
          </div>
        </div>
      </div>
    </div>
    <div class="d-grid gap-3">
      <div class="p-2 bg-light border">Grid item 1</div>
      <div class="p-2 bg-light border">Grid item 2</div>
      <div class="p-2 bg-light border">Grid item 3</div>
      <div class="p-2 bg-light border">Grid item 4</div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, toRefs } from "vue";
import planetData from "@/data/data.json";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

export default defineComponent({
  props: {
    name: {
      type: String,
      default: "Mercury",
    },
  },
  setup(props) {
    const { name } = toRefs(props);

    console.log("name", name.value);

    const planet = computed(() => {
      return planetData.find((p) => p.name.toLowerCase() === name.value);
    });

    return { planet };
  },
});
</script>
<style lang="scss" scoped>
.info {
  color: #ffffff;

  .venus .nav-tabs {
    border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.2);
    mix-blend-mode: normal;
  }

  .nav-link {
    color: inherit;
    border: none;

    &.active {
      border: none;
      background: transparent;
      border-bottom: 4px solid transparent;
      border-bottom-color: #419ebb;
    }
  }
}
</style>
