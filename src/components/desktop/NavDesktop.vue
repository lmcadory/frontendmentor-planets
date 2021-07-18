<template>
  <nav
    class="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark-blue"
  >
    <div class="container-fluid px-0">
      <div class="col">
        <div class="row">
          <div class="col-2">
            <a class="navbar-brand ps-4 text-uppercase" href="#">the planets</a>
          </div>
          <div class="col">
            <button
              :class="{ open: isOpen }"
              class="navbar-toggler float-end pe-4"
              type="button"
              @click="closeNav"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
                <g fill="#FFF" fill-rule="evenodd">
                  <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <hr class="toolbar" />
      </div>
      <div ref="navbar" id="PlanetNav" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mt-4">
          <li
            v-show="$grid.breakpoint === 'md'"
            class="nav-item"
            v-for="planet in planets"
            :key="planet.name"
          >
            <router-link
              class="nav-link text-uppercase"
              :to="`/${planet.name}`"              
              >{{ planet.name }}</router-link
            >
          </li>
          <li
            v-show="$grid.breakpoint === 'xs'"
            class="nav-item"
            v-for="(planet, index) in planets"
            :key="planet.name"
          >
            <div
              class="ps-4 row align-items-center"
              :class="{ 'mb-2': index === planets.length - 1 }"
            >
              <div class="col-1">
                <div :class="planet.class"></div>
              </div>
              <div class="col">
                <router-link
                  class="nav-link text-uppercase"
                  :to="`/${planet.name}`"
                  @click="closeNav"
                  >{{ planet.name }}</router-link
                >
              </div>
              <div class="pe-5 col text-end">
                <img src="../assets/icon-chevron.svg" alt="menu" />
              </div>
            </div>
            <hr class="item" v-if="index !== planets.length - 1" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Collapse } from "bootstrap/dist/js/bootstrap";

export default defineComponent({
  name: "Planets",
  setup() {
    const isOpen = ref(true);
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

    let bsCollapse = undefined;

    onMounted(() => {
      const id = document.getElementById("PlanetNav");
      bsCollapse = new Collapse(id);
    });

    const closeNav = () => {
      (bsCollapse || new Collapse()).toggle();
      isOpen.value = false;
    };

    return { planets, isOpen, closeNav };
  },
});
</script>

<style lang="scss" scoped>
hr {
  background-color: #ffffff;
  mix-blend-mode: normal;
  margin: 0;

  &.toolbar {
    opacity: 0.2;
    margin-top: 14px;
  }

  &.item {
    opacity: 0.1;
    margin: 16px 22px 16px;
  }
}

.bg-dark-blue {
  background-color: #070724;
}

.navbar-brand {
  font-family: Antonio;
  font-style: normal;
  font-weight: normal;
  font-size: 1.75rem;
  line-height: 2.25rem;
  letter-spacing: -1.05px;
}

.navbar-toggler {
  border: transparent;

  &:focus {
    box-shadow: none;
  }
}

.open {
  fill-opacity: 0.2;
}

.planet {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  &.mercury {
    background-color: #def4fc;
  }

  &.venus {
    background-color: #f7cc7f;
  }

  &.earth {
    background-color: #545bfe;
  }

  &.mars {
    background-color: #ff6a45;
  }

  &.jupiter {
    background-color: #ecad7a;
  }

  &.saturn {
    background-color: #fccb6b;
  }

  &.uranus {
    background-color: #65f0d5;
  }

  &.neptune {
    background-color: #497efa;
  }
}
</style>
