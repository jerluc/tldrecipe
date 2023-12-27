import { Recipe } from "schema-dts";

import { computed, ref, watch, MaybeRefOrGetter, toValue } from "vue";
import { useShare } from "@vueuse/core";

import { useCache } from "./cache";

type mapping = { [key: string]: any };

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

  const image = computed(() => {
    if (!recipe.value) return null;

    let image = recipe.value.image;
    if (Array.isArray(image)) {
      image = image[0];
    }
    if (typeof image === "object") {
      image = image.url;
    }

    // TODO: Meh
    return `${image}`;
  });

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
