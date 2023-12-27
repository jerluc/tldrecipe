<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useHead } from "@unhead/vue";
import { UseTimeAgo } from "@vueuse/components";
import { useIntervalFn } from "@vueuse/core";

useHead({
  title: "Read recipes, not life stories",
});

const router = useRouter();
const recipeUrl = ref("");

function goToRecipe() {
  router.push({ name: "recipe", query: { url: recipeUrl.value } });
}

const icons = [
  "restaurant",
  "lunch_dining",
  "cake",
  "local_bar",
  "local_pizza",
  "bakery_dining",
  "ramen_dining",
  "icecream",
  "set_meal",
  "soup_kitchen",
  "egg_alt",
  "oven",
  "skillet",
];

function getRandomIconIndex() {
  return Math.floor(Math.random() * icons.length);
}

const randIconIndex = ref(getRandomIconIndex());
const randIcon = computed(() => icons[randIconIndex.value]);

const { resume: resumeAnim, pause: pauseAnim } = useIntervalFn(
  function () {
    randIconIndex.value = (randIconIndex.value + 1) % icons.length;
  },
  1000,
  { immediate: false },
);

watch(recipeUrl, (newRecipeUrl) => {
  if (!!newRecipeUrl) {
    resumeAnim();
  } else {
    pauseAnim();
  }
});
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center">
    <form
      class="w-full sm:w-1/2 flex items-center flex-nowrap border-b border-current pb-1"
      @submit.prevent="goToRecipe"
    >
      <input
        class="grow w-full placeholder-current font-bold text-center text-2xl outline-none bg-transparent m-2"
        type="text"
        placeholder="Paste recipe link here"
        v-model="recipeUrl"
      />
      <button
        class="shrink bg-black text-banana p-2 rounded-xl opacity-50 flex items-center"
        :class="recipeUrl && 'animated'"
        v-if="recipeUrl"
      >
        Get&nbsp;<span class="material-symbols-rounded">{{ randIcon }}</span
        >in'
      </button>
    </form>
    <h2 class="italic m-4 text-center">
      Read <span class="line-through">life stories</span> recipes
    </h2>
  </div>
</template>

<style scoped lang="scss">
.animated {
  @apply animate-bounce motion-reduce:animate-none opacity-100;
}
</style>
