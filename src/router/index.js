import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "me",
    component: () => import("../Pages/HomePage.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("../Pages/ProjectPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../Pages/ContactPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
