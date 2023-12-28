<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { useSorted } from "@vueuse/core";
import { UseTimeAgo } from "@vueuse/components";
import { RouterLink } from "vue-router";

import { useCache } from "../cache";

const { cache } = useCache();

useHead({
  title: "Recently viewed recipes",
});

const recentItems = useSorted(cache, (left, right) =>
  left.created > right.created ? -1 : 1,
);

function getDomain(url: string) {
  const u = new URL(url);
  return u.host;
}
</script>

<template>
  <div class="w-full">
    <h2 class="text-4xl font-bold mb-8">Recently viewed recipes</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <RouterLink
        class="flex overflow-hidden items-center inline-block w-full rounded-xl bg-salmon hover:bg-white"
        :to="{ name: 'recipe', query: { url: item.url } }"
        :key="i"
        v-for="(item, i) in recentItems"
      >
        <img
          class="object-cover h-24 w-24 mr-2"
          :src="item.recipe.image.url || item.recipe.image[0]"
        />
        <div class="grow p-2 flex flex-col truncate">
          <span class="font-bold truncate">{{ item.name }}</span>
          <span>{{ getDomain(item.url) }}</span>
          <span class="italic">
            <UseTimeAgo :time="item.created" v-slot="{ timeAgo }">
              {{ timeAgo }}
            </UseTimeAgo>
          </span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
