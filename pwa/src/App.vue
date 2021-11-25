<template>
  <main>
    <header>
      <h1 id="logo">
        <a href="/">
          <icon />
        </a>
        <a href="/">
          <span>tl;drecipe</span>
        </a>
      </h1>
    </header>
    <div class="home" v-if="!recipe && !loading">
      <h2>Read recipes, not life stories!</h2>
      <form @submit.prevent="goToRecipe">
        <input
          type="text"
          placeholder="Paste recipe link here"
          v-model="recipeUrl"
        />
        <button class="material-icons" :class="recipeUrl && 'animated'">
          arrow_forward
        </button>
      </form>
    </div>
    <div class="loading" v-else-if="loading">
      <svg
        class="loader"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <div class="recipe" v-else>
      <Head>
        <title>tl;drecipe: {{ recipe.name }}</title>
      </Head>
      <div class="header">
        <h2>
          {{ recipe.name }}
        </h2>
      </div>
      <div class="image">
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
          <span>Read the whole recipe</span>
          <span class="material-icons">launch</span>
        </a>
      </footer>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Recipe } from "schema-dts";
import { Head } from "@vueuse/head";

import { CACHE } from "./cache";
import Icon from "@/assets/icon.svg?inline";

export default defineComponent({
  name: "App",
  components: {
    Head,
    Icon,
  },
  data() {
    return {
      loading: false,
      recipeUrl: null,
      recipe: null as Recipe,
    };
  },
  computed: {
    image(): string | null {
      if (!this.recipe) return null;
      let image = this.recipe.image;
      if (Array.isArray(image)) {
        image = image[0];
      }
      if (typeof image === "object") {
        image = image.url;
      }
      return image;
    },
    instructions(): string[] | null {
      if (!this.recipe) {
        return null;
      }
      if (Array.isArray(this.recipe.recipeInstructions)) {
        return this.recipe.recipeInstructions
          .filter((s) => !!s.text)
          .map((s) => s.text);
      }
      return [this.recipe.recipeInstructions];
    },
  },
  watch: {
    "$route.query": {
      handler: async function ({ url, text }) {
        this.recipeUrl = url || text;
        if (this.recipeUrl) {
          await this.loadRecipe();
        } else {
          this.recipe = null;
        }
      },
    },
  },
  methods: {
    stringOrPath(
      maybeString: string | unknown,
      jsonPath: string
    ): string | null {
      if (typeof maybeString === "string") {
        return maybeString;
      }
      const pathParts = jsonPath.split(".");
      let obj = maybeString as unknown;
      for (let k of pathParts) {
        obj = obj[k];
        if (!obj) {
          return null;
        }
      }
      return obj as string;
    },
    async loadRecipe(): Promise<void> {
      this.loading = true;
      try {
        const cachedRecipe = await CACHE.getRecipe(this.recipeUrl);
        if (cachedRecipe) {
          this.recipe = cachedRecipe;
          return;
        }
        const { recipe } = await fetch(
          `https://us-west1-tldrecipe.cloudfunctions.net/fetchRecipe?url=${encodeURIComponent(
            this.recipeUrl
          )}`,
          { method: "POST" }
        ).then((r) => r.json());
        if (recipe) {
          this.recipe = recipe as Recipe;
          await CACHE.cacheRecipe(this.recipeUrl, recipe);
        }
      } finally {
        this.loading = false;
      }
    },
    async goToRecipe() {
      this.$router.push({ query: { url: this.recipeUrl } });
    },
  },
});
</script>

<style lang="postcss">
html,
body {
  @apply bg-gradient-to-br from-banana to-yellow-200 text-black min-h-full w-full;
}

header {
  @apply backdrop-filter backdrop-blur-md bg-opacity-50 bg-black text-banana fixed top-0 w-full;

  #logo {
    @apply m-2 flex items-center justify-center font-display font-extrabold italic text-2xl hover:text-white;

    svg {
      @apply h-8 mr-2;
      * {
        @apply fill-current;
      }
    }
  }
}

main > div {
  @apply font-body pt-12;
}

.home {
  @apply flex flex-col items-center justify-center h-screen;

  h2 {
    @apply font-display font-bold italic text-2xl mb-4;
  }

  form {
    @apply flex flex-nowrap items-center border-b-2 border-current mt-2 p-1 w-1/2 xs:w-11/12;

    input[type="text"] {
      @apply flex-grow placeholder-current outline-none bg-transparent p-2;
    }

    button {
      @apply bg-black text-banana opacity-50 rounded-full text-lg px-2;
      &.animated {
        @apply animate-bounce motion-reduce:animate-none opacity-100;
      }
    }
  }
}

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
  @apply w-full p-4 pt-12 max-w-screen-sm mx-auto mt-8 min-h-full;

  h2 {
    @apply font-display font-bold text-xl;
  }

  h3 {
    @apply font-bold text-lg;
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
