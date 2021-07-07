<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark-blue">
    <div class="container-fluid">
      <a class="navbar-brand text-uppercase" href="#">the planets</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="../assets/icon-hamburger.svg" alt="menu">
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="planet in planets" :key="planet.name">
            <div :class="planet.class"></div>
            <router-link class="nav-link text-uppercase" :to="`/${planet.name}`">{{ planet.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const planets = [
      { name: "mercury", class: "planet mercury"},
      { name: "venus", class: "planet venus"},
      { name: "earth", class: "planet earth"},
      { name: "mars", class: "planet mars"},
      { name: "jupiter", class: "planet jupiter"},
      { name: "saturn", class: "planet saturn"},
      { name: "uranus", class: "planet uranus"},
      { name: "neptune", class: "planet neptune"},
    ];

    return { planets };
  },
});
</script>

<style lang="scss">
img {
	fill: blue;
}

.bg-dark-blue {
  background-color: #070724;
}
</style>
