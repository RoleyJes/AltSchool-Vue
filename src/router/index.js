import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorPage from "../views/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/repodetails/:id",
      name: "details",
      component: () => import("../views/RepoDetails.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "error",
      component: ErrorPage,
    },
  ],
});

export default router;
