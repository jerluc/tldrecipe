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
      <a class="font-display text-5xl hover:text-white" href="/">
        tl;drecipe
      </a>
      <RouterLink
        class="material-symbols-rounded"
        :to="{ name: 'history' }"
        v-if="cache.length > 0"
      >
        history
      </RouterLink>
    </header>
    <main class="grow p-4">
      <RouterView />
    </main>
    <footer class="shrink p-4 flex items-center justify-center">
      <a href="https://ko-fi.com/L3L21RSVP" target="_blank">
        <img
          height="36"
          style="border: 0px; height: 36px"
          src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
    </footer>
    <a
      class="fixed bottom-2 right-2 bg-black text-banana rounded-xl text-xs p-2 flex items-center"
      href="https://ko-fi.com/L3L21RSVP"
      target="_blank"
      v-if="false"
    >
      Buy me a&nbsp;
      <span class="material-symbols-rounded text-sm">coffee</span>
    </a>
  </div>
</template>
