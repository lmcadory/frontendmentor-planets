import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PlanetInfo from "../views/PlanetInfo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:name",
    name: "Info",
    component: PlanetInfo,    
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
