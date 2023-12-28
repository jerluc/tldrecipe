<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useHead } from "@unhead/vue";

import { useCache } from "./cache";

const { cache } = useCache();

useHead({
  titleTemplate: "tl;drecipe - %s",
});
</script>

<template>
  <div class="flex flex-col h-dvh">
    <header
      class="shrink p-2 grid grid-cols-3 items-center justify-items-center"
    >
      <RouterLink class="justify-self-start" to="/">
        <img class="h-12" src="/icon.svg" alt="tl;drecipe icon" />
      </RouterLink>
      <RouterLink
        class="font-display font-bold text-5xl h-[60px] hover:text-white"
        to="/"
      >
        tl;drecipe
      </RouterLink>
      <RouterLink
        class="justify-self-end h-8 w-8 rounded-full bg-mint hover:bg-white flex items-center justify-center"
        :to="{ name: 'history' }"
        title="Recently viewed recipes"
        v-if="cache.length > 0"
      >
        <span class="icon text-2xl">history</span>
      </RouterLink>
    </header>
    <main class="grow p-4">
      <RouterView />
    </main>
    <footer class="fixed bottom-2 right-2 flex items-center justify-center">
      <RouterLink
        :to="{ name: 'faq' }"
        class="bg-salmon hover:bg-white h-8 w-8 rounded-full flex items-center justify-center"
        title="Frequently asked questions"
      >
        <span class="icon text-2xl">info</span>
      </RouterLink>
    </footer>
  </div>
</template>
