<template>
  <div class="col info">
    <nav>
      <div
        :class="planet.name.toLowerCase()"
        class="nav nav-pills justify-content-between"
        id="nav-pill"
        role="pilllist"
      >
        <a
          class="nav-link text-uppercase pb-0 active"
          id="nav-home-pill"
          data-bs-toggle="pill"
          data-bs-target="#nav-home"
          href="#"
          aria-controls="nav-home"
          aria-selected="true"
        >
          overview
        </a>
        <a
          class="nav-link text-uppercase pb-0"
          id="nav-profile-pill"
          data-bs-toggle="pill"
          data-bs-target="#nav-profile"
          href="#"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          structure
        </a>
        <a
          class="nav-link text-uppercase pb-0"
          id="nav-contact-pill"
          data-bs-toggle="pill"
          data-bs-target="#nav-contact"
          href="#"
          aria-controls="nav-contact"
          aria-selected="false"
        >
          surface
        </a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="text-center" :class="planet.name.toLowerCase()">
        <img
          :src="require(`../../assets/planet-${planet.name.toLowerCase()}.svg`)"
          :alt="planet.name"
        />
        <p class="title text-uppercase">{{ planet.name }}</p>
      </div>
      <div
        class="tab-pane fade show active mx-4 mb-3"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="col text-center">
          <div class="content">
            {{ planet.overview.content }}
          </div>
          <div class="source mt-3">
            Source:
            <a :href="planet.overview.source"
              >Wikipedia <img src="../../assets/icon-source.svg" alt="link"
            /></a>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade mx-4 mb-3"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <div class="col text-center">
          <div class="content">
            {{ planet.structure.content }}
          </div>
          <div class="source mt-3">
            Source:
            <a :href="planet.structure.source"
              >Wikipedia <img src="../../assets/icon-source.svg" alt="link"
            /></a>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade mx-4 mb-3"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        <div class="col text-center">
          <div class="content">
            {{ planet.geology.content }}
          </div>
          <div class="source mt-3">
            Source:
            <a :href="planet.geology.source"
              >Wikipedia <img src="../../assets/icon-source.svg" alt="link"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="d-grid gap-3 mx-4">
      <div class="p-2 box px-0">
        <div class="row mx-4">
          <p class="text-uppercase col-6 label my-3 px-0">rotation time</p>
          <p class="col-6 number px-0">{{ planet.rotation }}</p>
        </div>
      </div>
      <div class="p-2 box px-0">
        <div class="row mx-4">
          <p class="text-uppercase col-6 label my-3 px-0">revolution time</p>
          <p class="col-6 number px-0">{{ planet.revolution }}</p>
        </div>
      </div>
      <div class="p-2 box px-0">
        <div class="row mx-4">
          <p class="text-uppercase col-6 label my-3 px-0">radius</p>
          <p class="col-6 number px-0">{{ planet.radius }}</p>
        </div>
      </div>
      <div class="p-2 box px-0">
        <div class="row mx-4">
          <p class="text-uppercase col-6 label my-3 px-0">average temp.e</p>
          <p class="col-6 number px-0">{{ planet.temperature }}</p>
        </div>
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
    });

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
@import "../../scss/mixin.scss";

.info {
  color: #ffffff;
  background: url("../../assets/background-stars.svg");

  .box {
    border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
    box-sizing: border-box;
  }

  .content {
    font-size: 0.688rem;
    line-height: 1.375;
  }

  .label {
    font-weight: bold;
    font-size: 0.5rem;
    line-height: 1rem;
    text-align: left;
    letter-spacing: -0.75px;
    margin-top: 0.563rem;
    margin-bottom: 0.813rem;
    opacity: 0.2;
  }

  .number {
    font-family: Antonio;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.625rem;
    text-align: right;
    letter-spacing: -0.75px;
    margin-top: 0.563rem;
    margin-bottom: 0.813rem;
  }

  .nav-pills::after {
    content: "";
    display: block;
    position: relative;
    width: 100%;
    border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.2);
  }

  .source {
    padding-bottom: 1.75rem;
    font-size: 0.75rem;
    line-height: 1.563rem;
    opacity: 0.5;

    a {
      color: #ffffff;
    }
  }

  .title {
    font-family: Antonio;
    font-size: 2.5rem;
    line-height: 3.25rem;
  }

  .mercury {
    @include tabs-img(7rem, 6rem, 6rem, #419ebb);
  }

  .venus {
    @include tabs-img(10rem, 5rem, 5rem, #eda249);
  }

  .earth {
    @include tabs-img(11rem, 4rem, 4rem, #6d2ed5);
  }

  .mars {
    @include tabs-img(8rem, 5rem, 5rem, #d14c32);
  }

  .jupiter {
    @include tabs-img(14rem, 3rem, 3rem, #d83a34);
  }

  .saturn {
    @include tabs-img(16rem, 2rem, 2rem, #cd5120);
  }

  .uranus {
    @include tabs-img(11rem, 4rem, 4rem, #1ec1a2);
  }

  .neptune {
    @include tabs-img(11rem, 4rem, 4rem, #2d68f0);
  }
}
</style>
