<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { UseTimeAgo } from "@vueuse/components";
import { RouterLink } from "vue-router";

import { useCache } from "../cache";

const { cache } = useCache();

useHead({
  title: "Bookmarks",
});
</script>

<template>
  <div class="recipes">
    <div :key="i" v-for="(item, i) in cache">
      <RouterLink :to="{ name: 'recipe', query: { url: item.url } }">
        <img
          class="w-16"
          :src="item.recipe.image.url || item.recipe.image[0]"
        />
        <UseTimeAgo :time="item.created" v-slot="{ timeAgo }">
          {{ item.name }} ({{ timeAgo }})
        </UseTimeAgo>
      </RouterLink>
    </div>
  </div>
</template>
