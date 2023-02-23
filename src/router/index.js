import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/lists",
      name: "lists",
      component: () => import("../components/Lists.vue"),
    },
  ],
});

export default router;
