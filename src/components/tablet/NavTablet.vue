<template>
  <nav class="navbar navbar-dark bg-dark-blue">
    <div class="container-fluid mt-2 px-0">
      <div class="col text-center mt-4">
        <span class="navbar-brand text-uppercase mb-3">the planets</span>
        <ul class="nav mt-4 justify-content-center">
          <li
            class="nav-item"
            v-for="planet in planets"
            :key="planet.name"
          >
            <router-link
              class="nav-link links text-uppercase px-0 pb-0"
              :to="`/${planet.name}`"
              >{{ planet.name }}</router-link
            >
          </li>
        </ul>
        <hr />
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
  margin-top: 1.688rem;
  background: #ffffff;
  opacity: .2;
}
.bg-dark-blue {
  background-color: #070724;
}

.links {
  font-family: Spartan;
  font-weight: bold;
  font-size: .688rem;
  line-height: 1.563rem;
  letter-spacing: 1px;
  color: #ffffff;
  margin-left: 1rem;
  margin-right: 1rem; 
  
}

.navbar-brand {
  font-family: Antonio;
  font-style: normal;
  font-weight: normal;
  font-size: 1.75rem;
  line-height: 2.25rem;
  letter-spacing: -1.05px;
}
</style>
