<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import { useWakeLock } from "@vueuse/core";

import { useRecipe } from "../recipe";

// Meh
const { isSupported, isActive, request } = useWakeLock();
if (isSupported.value && !isActive.value) {
  request("screen");
}

const route = useRoute();
const recipeUrl = computed(() => {
  const recipeUrlParam = route.query.url;

  if (Array.isArray(recipeUrlParam)) {
    return recipeUrlParam[0]!.toString();
  } else {
    return recipeUrlParam!.toString();
  }
});

const { loading, recipe, image, instructions } = useRecipe(recipeUrl);

useHead({
  title: () => (recipe.value ? `${recipe.value.name}` : "Loading"),
});

// TODO: This thing sucks ass
function stringOrPath(
  maybeString: string | Record<string, any>,
  jsonPath: string,
): string | null {
  if (!maybeString) {
    return null;
  }

  if (typeof maybeString === "string") {
    return maybeString;
  }
  const pathParts = jsonPath.split(".");
  const obj = maybeString;
  let v: string | null = null;
  for (let k of pathParts) {
    v = obj[k];
    if (!v) {
      return null;
    }
  }
  return v;
}
</script>

<template>
  <div class="loading" v-if="loading">
    <h2>Cooking up something good...</h2>
  </div>
  <div class="recipe" v-else-if="recipe">
    <div class="header">
      <h2>
        {{ recipe.name }}
      </h2>
    </div>
    <div class="image" v-if="image">
      <img :src="image" :alt="recipe.name" />
    </div>
    <div class="meta">
      <h3>Ingredients</h3>
      <ul>
        <li
          :key="i"
          v-for="(ingredient, i) in recipe.recipeIngredient"
          v-html="stringOrPath(ingredient, 'ingredient')"
        />
      </ul>
    </div>
    <div class="body">
      <h3>Instructions</h3>
      <ol>
        <li
          :key="i"
          v-for="(step, i) in instructions"
          v-html="stringOrPath(step, 'text')"
        />
      </ol>
    </div>
    <footer>
      <a :href="recipeUrl" target="_blank" rel="noopener noreferrer">
        <span class="material-symbols-rounded">menu_book</span>
        <span>Read the whole recipe</span>
      </a>
    </footer>
  </div>
  <div v-else>
    <h2>OH NO!</h2>
  </div>
</template>

<style scoped lang="scss">
.loading {
  @apply flex flex-col items-center justify-center h-screen;

  .loader {
    @apply animate-spin h-12 w-12 text-white text-burnt-banana;

    circle {
      @apply opacity-25;
    }

    path {
      @apply opacity-75;
    }
  }
}

.recipe {
  @apply w-full max-w-screen-sm mx-auto min-h-full;

  h2 {
    @apply font-bold text-4xl;
  }

  h3 {
    @apply font-bold text-2xl;
  }

  .image {
    img {
      @apply object-cover object-center h-96 w-full;
    }
  }

  ul {
    @apply list-disc m-4;
  }

  ol {
    @apply list-decimal m-4;

    li {
      @apply mb-4;
    }
  }

  .image,
  .meta,
  .body,
  footer {
    @apply mt-12 text-lg;
  }

  footer {
    a {
      @apply flex items-center justify-center bg-black text-white rounded-full p-1 text-center w-full;

      span {
        @apply inline-block text-lg font-medium mx-1;
      }
    }
  }
}
</style>
