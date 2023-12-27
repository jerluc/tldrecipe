import { computed, toValue, MaybeRefOrGetter } from "vue";
import { createGlobalState, useStorage } from "@vueuse/core";
import { Recipe } from "schema-dts";
import { formatISO } from "date-fns";

export type CacheItem = {
  url: string;
  name: string;
  recipe: Recipe;
  created: string;
  dtl: number;
  version: number;
};

const _CACHE_VERSION = 2;
const _CACHE_KEY = "tldrecipe";

export const useCache = createGlobalState(function () {
  const cache = useStorage<CacheItem[]>(`${_CACHE_KEY}_${_CACHE_VERSION}`, []);

  function getRecipe(maybeUrl: MaybeRefOrGetter<string | null>) {
    return computed(() => {
      const url = toValue(maybeUrl);
      if (!url) return null;

      const item = cache.value.find((item) => item.url === url);
      return item ? item.recipe : null;
    });
  }

  function cacheRecipe(url: string, recipe: Recipe) {
    const cacheItem: CacheItem = {
      url,
      name: recipe.name!.toString(),
      recipe,
      created: formatISO(new Date()),
      dtl: 1,
      version: _CACHE_VERSION,
    };
    cache.value.push(cacheItem);
  }

  return { cache, getRecipe, cacheRecipe };
});
