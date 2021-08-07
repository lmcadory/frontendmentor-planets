<template>
  <nav class="navbar navbar-dark bg-dark-blue p-0">
    <div class="container-fluid px-0">
      <div class="col">
        <div class="row text-start">
          <div class="col-6 brand">
            <span class="navbar-brand text-uppercase">the planets</span>
          </div>
          <div class="col-6">
            <ul class="nav justify-content-end">
              <li class="nav-item" v-for="planet in planets" :key="planet.name">
                <router-link
                  class="nav-link links text-uppercase p-0"
                  :class="planet.name"
                  :to="`/${planet.name}`"
                  >{{ planet.name }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Planets",
  setup() {
    const planets = [
      { name: "mercury", class: "planet mercury" },
      { name: "venus", class: "planet venus" },
      { name: "earth", class: "planet earth" },
      { name: "mars", class: "planet mars" },
      { name: "jupiter", class: "planet jupiter" },
      { name: "saturn", class: "planet saturn" },
      { name: "uranus", class: "planet uranus" },
      { name: "neptune", class: "planet neptune" },
    ];

    return { planets };
  },
});
</script>

<style lang="scss" scoped>
@import "../../scss/mixin.scss";

hr {
  margin-top: 1.688rem;
  margin-bottom: 0;
  background: #ffffff;
  opacity: 0.2;
}
.bg-dark-blue {
  background-color: #070724;
}

.col-6 {
  padding-top: 2rem;
  padding-right: 2.5rem;
}

.links {
  font-family: Spartan;
  font-weight: bold;
  font-size: 0.688rem;
  line-height: 1.563rem;
  letter-spacing: 1px;
  color: #ffffff;
  margin-left: 1rem;
  margin-right: 1rem;
}

.brand {
  padding-top: 1.375rem;
  padding-left: 2rem;
}

.navbar-brand {
  font-family: Antonio;
  font-style: normal;
  font-weight: normal;
  font-size: 1.75rem;
  line-height: 2.25rem;
  letter-spacing: -1.05px;
}

li {
  .mercury {
    @include nav-link(#419ebb);
  }

  .venus {
    @include nav-link(#eda249);
  }

  .earth {
    @include nav-link(#6d2ed5);
  }

  .mars {
    @include nav-link(#d14c32);
  }

  .jupiter {
    @include nav-link(#d83a34);
  }

  .saturn {
    @include nav-link(#cd5120);
  }

  .uranus {
    @include nav-link(#1ec1a2);
  }

  .neptune {
    @include nav-link(#2d68f0);
  }
}
</style>
