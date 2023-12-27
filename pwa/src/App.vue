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
    <header class="shrink p-4 flex items-center justify-between">
      <span>&nbsp;</span>
      <RouterLink class="font-display text-5xl hover:text-white" to="/">
        tl;drecipe
      </RouterLink>
      <RouterLink
        class="material-symbols-rounded"
        :to="{ name: 'history' }"
        v-if="cache.length > 0"
      >
        history
      </RouterLink>
      <span v-else>&nbsp;</span>
    </header>
    <main class="grow p-4">
      <RouterView />
    </main>
    <footer class="shrink p-4 flex items-center justify-end mt-12">
      <a href="mailto:support@tldrecipe.app">
        <span class="material-symbols-rounded">info</span>
      </a>
      <a href="mailto:support@tldrecipe.app">
        <span class="material-symbols-rounded">help</span>
      </a>
      <a href="mailto:support@tldrecipe.app">
        <span class="material-symbols-rounded">error</span>
      </a>
      <a href="https://ko-fi.com/jerluc" target="_blank">
        <span class="material-symbols-rounded">monetization_on</span>
      </a>
    </footer>
  </div>
</template>
