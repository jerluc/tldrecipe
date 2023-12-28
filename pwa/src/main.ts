import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import { createRouter, createWebHistory } from "vue-router";
import { registerSW } from "virtual:pwa-register";

// NOTE: This for some reason doesn't work without specifying latin-400
import "@fontsource/moirai-one/latin-400.css";
import "@fontsource-variable/material-symbols-rounded/opsz.css";
import "@fontsource-variable/work-sans";

import "./style.css";
import App from "./App.vue";

registerSW({
  onOfflineReady() {},
});

const head = createHead();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("./pages/home.vue"),
    },
    {
      name: "faq",
      path: "/faq",
      component: () => import("./pages/faq.vue"),
    },
    {
      name: "history",
      path: "/history",
      component: () => import("./pages/history.vue"),
    },
    {
      name: "recipe",
      path: "/recipe",
      component: () => import("./pages/recipe.vue"),
    },
  ],
});

createApp(App).use(head).use(router).mount("#app");
