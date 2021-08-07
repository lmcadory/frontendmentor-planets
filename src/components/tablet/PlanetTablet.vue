<template>
  <div class="col info">
    <div class="text-center" :class="planet.name.toLowerCase()">
      <img
        :src="require(`../../assets/planet-${planet.name.toLowerCase()}.svg`)"
        :alt="planet.name"
      />
    </div>
    <div class="d-flex align-items-center tabs">
      <div class="tab-content col-6 me-3" id="nav-tabContent">
        <p class="title text-uppercase pb-4">{{ planet.name }}</p>
        <div
          class="tab-pane fade show active"
          id="nav-overview"
          role="tabpanel"
          aria-labelledby="nav-overview-tab"
        >
          <div class="col text-start pb-3">
            <div class="content">
              {{ planet.overview.content }}
            </div>
            <div class="source  pt-3">
              Source:
              <a :href="planet.overview.source"
                >Wikipedia <img src="../../assets/icon-source.svg" alt="link"
              /></a>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-structure"
          role="tabpanel"
          aria-labelledby="nav-structure-tab"
        >
          <div class="col text-start pb-3">
            <div class="content">
              {{ planet.structure.content }}
            </div>
            <div class="source  pt-3">
              Source:
              <a :href="planet.structure.source"
                >Wikipedia <img src="../../assets/icon-source.svg" alt="link"
              /></a>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-surface"
          role="tabpanel"
          aria-labelledby="nav-surface-tab"
        >
          <div class="col text-start pb-3">
            <div class="content">
              {{ planet.geology.content }}
            </div>
            <div class="source  pt-3">
              Source:
              <a :href="planet.geology.source"
                >Wikipedia <img src="../../assets/icon-source.svg" alt="link"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="nav nav-pills col-6 ms-5 pb-6"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          class="box-btn text-uppercase mb-3 active"
          id="nav-overview-pill"
          data-bs-toggle="pill"
          data-bs-target="#nav-overview"
          role="tab"
          aria-controls="nav-overview"
          aria-selected="true"
        >
          <div>01</div>
          <div class="btn-name">overview</div>
        </button>
        <button
          class="box-btn text-uppercase mb-3 pb-0"
          id="nav-structure-pill"
          data-bs-toggle="pill"
          data-bs-target="#nav-structure"
          role="tab"
          aria-controls="nav-structure"
          aria-selected="false"
        >
          <div>02</div>
          <div class="btn-name">internal structure</div>
        </button>
        <button
          class="box-btn text-uppercase pb-0"
          id="nav-surface-pill"
          data-bs-toggle="pill"
          data-bs-target="#nav-surface"
          role="tab"
          aria-controls="nav-surface"
          aria-selected="false"
        >
          <div>03</div>
          <div class="btn-name">surface geology</div>
        </button>
      </div>
    </div>

    <div class="row tabs">
      <div class="box text-start col me-2">
        <p class="text-uppercase label">rotation time</p>
        <p class="number">{{ planet.rotation }}</p>
      </div>
      <div class="box text-start col me-2">
        <p class="text-uppercase label">revolution time</p>
        <p class="number">{{ planet.revolution }}</p>
      </div>
      <div class="box text-start col me-2">
        <p class="text-uppercase label">radius</p>
        <p class="number">{{ planet.radius }}</p>
      </div>
      <div class="box text-start col">
        <p class="text-uppercase label">average temp.</p>
        <p class="number">{{ planet.temperature }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import planetData from "@/data/data.json";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default defineComponent({  
  setup() {
    const route = useRoute();
    const name = ref(route.params.name);
    
    onBeforeRouteUpdate((to) => {
      name.value = to.params.name;
    })

    const planet = computed(() => {
      return planetData.find((p) => p.name.toLowerCase() === name.value);
    });

    const planetImage = computed(() => {
      return `../../assets/planet-${planet.value?.name.toLowerCase()}.svg`;
    });

    return { planet, planetImage };
  },
});
</script>
<style lang="scss" scoped>
@mixin img($width, $padding-top, $padding-bottom) {
  img {
    width: $width;
    padding-top: $padding-top;
    padding-bottom: $padding-bottom;
  }
}

.info {
  color: #ffffff;
  background: url("../../assets/background-stars.svg");

  button {
    width: 17.563rem;
  }

  .pb-6 {
    padding-bottom: 2.5rem;
  }

  .box {
    border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
    box-sizing: border-box;
  }

  .box-btn {
    color: rgba($color: #ffffff, $alpha: 0.5);
    font-family: Spartan;
    font-style: normal;
    font-weight: bold;
    font-size: 0.563rem;
    line-height: 1.563rem;
    letter-spacing: 1.92857px;
    background-color: transparent;
    border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
    box-sizing: border-box;
    height: 2.5rem;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1.25rem;
  }

  .btn-name {
    color: #ffffff;
    font-family: Spartan;
    font-style: normal;
    font-weight: bold;
    font-size: 0.563rem;
    line-height: 1.563rem;
    letter-spacing: 1.92857px;
    padding-left: .875rem;
  }

  .content {
    font-size: 0.688rem;
    line-height: 1.375rem;
  }

  .label {
    font-weight: bold;
    font-size: 0.5rem;
    line-height: 1rem;
    letter-spacing: 0.727273px;
    margin-top: 1rem;
    opacity: 0.5;
  }

  .number {
    font-family: Antonio;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.938rem;
    letter-spacing: -0.9px;
    margin-top: 0.375rem;
    margin-bottom: 1.188rem;
  }

  .source {
    padding-bottom: 1.688rem;
    font-size: 0.75rem;
    line-height: 1.563rem;
    opacity: 0.5;

    a {
      color: #ffffff;
    }
  }

  .tabs {
    margin-right: 2.5rem;
    margin-left: 2.438rem;
  }

  .title {
    font-family: Antonio;
    font-size: 2.5rem;
    line-height: 3.25rem;
  }

  .mercury {
    @include img(11.5rem, 9.125rem, 8.125rem);
  }

  .venus {
    @include img(15.813rem, 7rem, 5.938rem);
  }

  .earth {
    @include img(17.813rem, 6rem, 4.938rem);
  }

  .mars {
    @include img(13.313rem, 8.25rem, 7.188rem);
  }

  .jupiter {
    @include img(23.063rem, 3.375rem, 2.313rem);
  }

  .saturn {
    @include img(26.375rem, 1.688rem, .688rem);
  }

  .uranus {
    @include img(18.125rem, 5.813rem, 4.813rem);
  }

  .neptune {
    @include img(17.813rem, 6rem, 4.938rem);
  }
}
</style>
