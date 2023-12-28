import type { Recipe } from "schema-dts";

import { computed, ref, watch, MaybeRefOrGetter, toValue } from "vue";
import { useShare } from "@vueuse/core";

import { useCache } from "./cache";

function first<T>(things: T): T {
  if (Array.isArray(things)) {
    return things[0];
  }
  return things;
}

export function getImage(recipe: Recipe | null) {
  if (!recipe) return undefined;

  if (!recipe.image) return undefined;

  const image = first(recipe.image);

  if (typeof image === "string") {
    return image;
  }

  if ("url" in image) {
    return image.url?.toString();
  }

  // TODO: Meh
  return image.toString();
}

export function useRecipe(recipeUrl: MaybeRefOrGetter<string>) {
  const loading = ref(false);
  const { getRecipe, cacheRecipe } = useCache();
  const recipe = getRecipe(toValue(recipeUrl));

  const { share: doShare } = useShare();
  function share() {
    doShare({
      title: recipe.value ? recipe.value.name!.toString() : "tl;drecipe",
      url: toValue(recipeUrl),
    });
  }

  const image = computed(() => getImage(recipe.value));

  const instructions = computed(() => {
    if (!recipe.value) {
      return null;
    }

    const { recipeInstructions } = recipe.value;

    if (Array.isArray(recipeInstructions)) {
      return recipeInstructions.filter((s) => !!s.text).map((s) => s.text);
    }
    return [recipeInstructions];
  });

  async function loadRecipe() {
    const theRecipeUrl = toValue(recipeUrl);
    loading.value = true;
    try {
      const { recipe: newRecipe } = await fetch(
        `https://us-west1-tldrecipe.cloudfunctions.net/fetchRecipe?url=${encodeURIComponent(
          theRecipeUrl,
        )}`,
        { method: "POST" },
      ).then((r) => r.json());
      if (newRecipe) {
        cacheRecipe(theRecipeUrl, newRecipe as Recipe);
      }
    } finally {
      loading.value = false;
    }
  }

  watch(
    () => toValue(recipeUrl),
    async (newUrl) => {
      if (newUrl) {
        await loadRecipe();
      }
    },
  );

  if (!recipe.value) {
    loadRecipe();
  }

  return {
    loading,
    recipeUrl,
    recipe,
    image,
    instructions,
    reload: loadRecipe,
    share,
  };
}
