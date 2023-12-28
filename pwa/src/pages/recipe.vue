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
  } else if (recipeUrlParam) {
    return recipeUrlParam.toString();
  }

  const recipeTextParam = route.query.text;
  if (Array.isArray(recipeTextParam)) {
    return recipeTextParam[0]!.toString();
  } else {
    return recipeTextParam!.toString();
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
    <h2 class="text-4xl">Cooking up something good...</h2>
    <div class="mt-4 h-1 w-full md:w-1/4 bg-salmon/25 overflow-hidden">
      <div class="progress w-full h-full bg-salmon left-right"></div>
    </div>
  </div>
  <div class="recipe" v-else-if="recipe">
    <div class="header">
      <h2>
        {{ recipe.name }}
      </h2>
    </div>
    <div class="image" v-if="image">
      <img :src="image" :alt="recipe.name ? recipe.name?.toString() : ''" />
    </div>
    <div class="meta" v-if="recipe.recipeIngredient">
      <h3>Ingredients</h3>
      <ul>
        <li
          :key="i"
          v-for="(ingredient, i) in recipe.recipeIngredient"
          v-html="stringOrPath(ingredient, 'ingredient')"
        />
      </ul>
    </div>
    <div class="body" v-if="instructions">
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
.progress {
  animation: progress 1s infinite linear;
}

.left-right {
  transform-origin: 0% 50%;
}
@keyframes progress {
  0% {
    transform: translateX(0) scaleX(0);
  }
  40% {
    transform: translateX(0) scaleX(0.4);
  }
  100% {
    transform: translateX(100%) scaleX(0.5);
  }
}

.loading {
  @apply flex flex-col items-center justify-center h-full w-full;
}

.recipe {
  @apply w-full max-w-screen-sm mx-auto;

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
