import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";
import Home from "./pages/home.vue";
import History from "./pages/history.vue";
import Recipe from "./pages/recipe.vue";

const head = createHead();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
    },
    {
      name: "history",
      path: "/history",
      component: History,
    },
    {
      name: "recipe",
      path: "/recipe",
      component: Recipe,
    },
  ],
});

createApp(App).use(head).use(router).mount("#app");
