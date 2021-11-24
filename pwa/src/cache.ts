import { Recipe } from "schema-dts";
import { addDays, formatISO, isPast } from "date-fns";

import localForage from "localforage";

interface CacheItem {
  recipe: Recipe;
  created: string;
  dtl: number;
  version: number;
}

class Cache {
  private version: number;
  private store: any;

  constructor(version: number) {
    this.store = localForage.createInstance({
      name: "tldrecipe",
      driver: localForage.INDEXEDDB,
    });
    this.version = version;
  }

  async getRecipe(key: string): Promise<Recipe | null> {
    const rawCacheItem = await this.store.getItem(key);
    if (rawCacheItem) {
      const cacheItem = JSON.parse(rawCacheItem as string) as CacheItem;
      const created = new Date(cacheItem.created);
      const expiration = addDays(created, cacheItem.dtl);
      if (!isPast(expiration) && cacheItem.version === this.version) {
        return cacheItem.recipe;
      }
    }
    return null;
  }

  async cacheRecipe(key: string, recipe: Recipe): Promise<Recipe> {
    const cacheItem = {
      recipe,
      created: formatISO(new Date()),
      dtl: 1,
      version: this.version,
    };
    await this.store.setItem(key, JSON.stringify(cacheItem));
    return recipe;
  }
}

export const CACHE = new Cache(0);
