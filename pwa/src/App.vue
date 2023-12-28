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
      class="shrink p-4 grid grid-cols-3 items-center justify-items-center"
    >
      <RouterLink class="justify-self-start" to="/">
        <img class="h-12" src="/icon.svg" alt="tl;drecipe icon" />
      </RouterLink>
      <RouterLink
        class="font-display text-5xl h-[60px] hover:text-white"
        to="/"
      >
        tl;drecipe
      </RouterLink>
      <RouterLink
        class="material-symbols-rounded justify-self-end"
        :to="{ name: 'history' }"
        v-if="cache.length > 0"
      >
        history
      </RouterLink>
    </header>
    <main class="grow p-4">
      <RouterView />
    </main>
    <RouterLink
      :to="{ name: 'faq' }"
      class="fixed bottom-2 right-2 bg-salmon hover:bg-white h-5 w-5 rounded-full flex items-center justify-center"
      title="Frequently asked questions"
    >
      <span class="material-symbols-rounded">help</span>
    </RouterLink>
  </div>
</template>
