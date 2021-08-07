<template>
  <div class="container-fluid info">
    <div class="container">
      <div class="col">
        <div class="row">
          <div
            class="col-7 d-flex justify-content-center"
            :class="planet.name.toLowerCase()"
          >
            <img
              v-show="showPlanet"
              :src="
                require(`../../assets/planet-${planet.name.toLowerCase()}.svg`)
              "
              :alt="planet.name"
            />
            <img
              v-show="showInternal"
              :src="
                require(`../../assets/planet-${planet.name.toLowerCase()}-internal.svg`)
              "
              :alt="planet.name"
            />
            <div class="img-wrapper" v-show="showSurface">
              <img
                :src="
                  require(`../../assets/planet-${planet.name.toLowerCase()}.svg`)
                "
                :alt="planet.name"
              />
              <img
                class="surface"
                :src="
                  require(`../../assets/geology-${planet.name.toLowerCase()}.png`)
                "
                :alt="planet.name"
              />
            </div>
          </div>
          <div class="col-5">
            <div class="tabs p-top p-start">
              <div class="tab-content col" id="nav-tabContent">
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
                    <div class="source pt-3">
                      Source:
                      <a :href="planet.overview.source"
                        >Wikipedia
                        <img src="../../assets/icon-source.svg" alt="link"
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
                    <div class="source pt-3">
                      Source:
                      <a :href="planet.structure.source"
                        >Wikipedia
                        <img src="../../assets/icon-source.svg" alt="link"
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
                    <div class="source pt-3">
                      Source:
                      <a :href="planet.geology.source"
                        >Wikipedia
                        <img src="../../assets/icon-source.svg" alt="link"
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="nav nav-pills col"
                :class="planet.name.toLowerCase()"
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
                  @click="updateImage('overview')"
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
                  @click="updateImage('structure')"
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
                  @click="updateImage('surface')"
                >
                  <div>03</div>
                  <div class="btn-name">surface geology</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row tabs">
        <div class="box text-start col me-3">
          <p class="text-uppercase label">rotation time</p>
          <p class="number">{{ planet.rotation }}</p>
        </div>
        <div class="box text-start col ms-3 me-3">
          <p class="text-uppercase label">revolution time</p>
          <p class="number">{{ planet.revolution }}</p>
        </div>
        <div class="box text-start col ms-3 me-3">
          <p class="text-uppercase label">radius</p>
          <p class="number">{{ planet.radius }}</p>
        </div>
        <div class="box text-start col ms-3">
          <p class="text-uppercase label">average temp.</p>
          <p class="number">{{ planet.temperature }}</p>
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
  setup(props) {
    const route = useRoute();
    const name = ref(route.params.name);
    const showPlanet = ref(true);
    const showInternal = ref(false);
    const showSurface = ref(false);

    onBeforeRouteUpdate((to) => {
      name.value = to.params.name;
    });

    const planet = computed(() => {
      return planetData.find((p) => p.name.toLowerCase() === name.value);
    });

    const updateImage = (layer) => {
      switch (layer) {
        case "overview":
          showPlanet.value = true;
          showInternal.value = false;
          showSurface.value = false;
          break;
        case "structure":
          showPlanet.value = false;
          showInternal.value = true;
          showSurface.value = false;
          break;
        case "surface":
          showPlanet.value = false;
          showInternal.value = false;
          showSurface.value = true;
          break;
        default:
          break;
      }
    };

    return { planet, showPlanet, showInternal, showSurface, updateImage };
  },
});
</script>
<style lang="scss" scoped>
@mixin img(
  $width,
  $padding-top,
  $padding-start,
  $padding-bottom,
  $padding-end
) {
  img {
    width: $width;
    padding: $padding-top $padding-start $padding-bottom $padding-end;
  }
}

@mixin surface($top, $left) {
  .img-wrapper {
    position: relative;

    .surface {
      position: absolute;
      top: $top;
      left: $left;
      right: 0;
      width: 10.188rem;
    }
  }
}

.info {
  color: #ffffff;
  background: url("../../assets/background-stars.svg");
  height: 100vh;

  #v-pills-tab {
    &.mercury {
      .active {
        background: #419ebb;
      }
    }

    &.venus {
      .active {
        background: #eda249;
      }
    }

    &.earth {
      .active {
        background: #6d2ed5;
      }
    }

    &.mars {
      .active {
        background: #d14c32;
      }
    }

    &.jupiter {
      .active {
        background: #d83a34;
      }
    }

    &.saturn {
      .active {
        background: #cd5120;
      }
    }

    &.uranus {
      .active {
        background: #1ec1a2;
      }
    }

    &.neptune {
      .active {
        background: #2d68f0;
      }
    }
  }

  button {
    width: 21.875rem;
  }

  .p-top {
    padding-top: 7.875rem;
  }

  .p-start {
    padding-left: 7rem;
  }

  .box {
    border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
    box-sizing: border-box;
    width: 15.938rem;
  }

  .box-btn {
    color: rgba($color: #ffffff, $alpha: 0.5);
    font-family: Spartan;
    font-style: normal;
    font-weight: bold;
    font-size: 0.75rem;
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
    font-size: 0.75rem;
    line-height: 1.563rem;
    letter-spacing: 1.92857px;
    padding-left: 0.875rem;
  }

  .content {
    font-size: 0.875rem;
    line-height: 1.563rem;
    width: 21.875rem;
  }

  .label {
    font-weight: bold;
    font-size: 0.688rem;
    line-height: 1.563rem;
    letter-spacing: 0.063px;
    margin-top: 1.25rem;
    opacity: 0.5;
  }

  .number {
    font-family: Antonio;
    font-style: normal;
    font-weight: normal;
    font-size: 2.5rem;
    line-height: 3.25rem;
    letter-spacing: -0.094px;
    margin-top: 0.25rem;
    margin-bottom: 1.688rem;
  }

  .source {
    padding-bottom: 1.688rem;
    font-size: 0.875rem;
    line-height: 1.563rem;
    opacity: 0.5;
    align-self-center a {
      color: #ffffff;
    }
  }

  .tabs {
    margin-right: 2.5rem;
    margin-left: 2.438rem;
  }

  .title {
    font-family: Antonio;
    font-size: 5rem;
    line-height: 6.5rem;
  }

  .mercury {
    @include img(18.125rem, 15.125rem, 0, 13.875rem, 0);
    @include surface(14rem, 4rem);
  }

  .venus {
    @include img(25rem, 11.688rem, 0, 10.438rem, 0);
    @include surface(17.5rem, 7.5rem);
  }

  .earth {
    @include img(28.125rem, 10.125rem, 0, 8.875em, 0);
    @include surface(19.5rem, 9rem);
  }

  .mars {
    @include img(21rem, 13.688rem, 0, 12.438rem, 0);
    @include surface(15.5rem, 5.5rem);
  }

  .jupiter {
    @include img(36.563rem, 6rem, 0, 4.75rem, 0);
    @include surface(23.5rem, 13.2rem);
  }

  .saturn {
    @include img(41.631rem, 4.372rem, 0, 1.122rem, 0);
    @include surface(24.5rem, 15.7rem);
  }

  .uranus {
    @include img(28.625rem, 9.875rem, 0, 8.625rem, 0);
    @include surface(18.5rem, 9.2rem);
  }

  .neptune {
    @include img(28.125rem, 10.125rem, 0, 8.875rem, 0);
    @include surface(19.5rem, 9rem);
  }
}
</style>
