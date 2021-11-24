<template>
  <main>
    <header>
      <h1 id="logo">
        <img src="/favicon.png" />
        <span>TL;DRecipe</span>
      </h1>
    </header>
    <div class="home" v-if="!recipe && !loading">
      <form @submit.prevent="goToRecipe">
        <input
          type="text"
          placeholder="Recipe web page URL"
          v-model="recipeUrl"
        />
        <button class="material-icons">arrow_forward</button>
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
      <h2>{{ recipe.name }}</h2>
      <img :src="image" />
      <h3>Ingredients</h3>
      <ul>
        <li :key="i" v-for="(ingredient, i) in recipe.recipeIngredient">
          {{ ingredient }}
        </li>
      </ul>
      <h3>Instructions</h3>
      <ol>
        <li :key="i" v-for="(step, i) in instructions">
          {{ step }}
        </li>
      </ol>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Recipe } from "schema-dts";

export default defineComponent({
  name: "App",
  data() {
    return {
      loading: false,
      recipeUrl: null,
      recipe: null as Recipe,
      // recipe: EXAMPLE_RECIPE,
    };
  },
  computed: {
    image(): string | null {
      if (!this.recipe) return null;
      if (Array.isArray(this.recipe.image)) {
        return this.recipe.image[0];
      }
      if (
        typeof this.recipe.image === "object" &&
        this.recipe.image["@type"] === "ImageObject"
      ) {
        return this.recipe.image.url;
      }
      return this.recipe.image;
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
    "$route.query.url": {
      handler: async function (newUrl) {
        this.recipeUrl = newUrl;
        if (newUrl) {
          await this.loadRecipe();
        }
      },
    },
  },
  methods: {
    async loadRecipe(): Promise<void> {
      this.loading = true;
      try {
        const { recipe } = await fetch(
          `https://us-west1-tldrecipe.cloudfunctions.net/fetchRecipe?url=${encodeURIComponent(
            this.recipeUrl
          )}`,
          { method: "POST" }
        ).then((r) => r.json());
        if (recipe) {
          this.recipe = recipe as Recipe;
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
  @apply subpixel-antialiased bg-banana text-black;
}

header {
  @apply backdrop-filter backdrop-blur-md bg-opacity-75 bg-banana fixed top-0 w-full;

  #logo {
    @apply m-2 text-black flex items-center font-display text-2xl;

    img {
      @apply h-8 mr-2;
    }
  }
}

main {
  @apply font-body pt-12 w-screen h-screen;
}

.home {
  @apply flex flex-col items-center justify-center h-full w-screen;

  form {
    @apply flex flex-nowrap items-center border-b-2 border-current mt-2 p-1 w-1/2 xs:w-11/12;

    input[type="text"] {
      @apply flex-grow placeholder-current outline-none bg-transparent p-2;
    }

    button {
      @apply bg-black text-banana rounded-full text-sm px-1 animate-bounce motion-reduce:animate-none;
    }
  }
}

.loading {
  @apply flex flex-col items-center justify-center w-full h-full;

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
  @apply w-full p-4 max-w-screen-sm m-auto;

  h2 {
    @apply font-display text-xl;
  }

  h3 {
    @apply font-bold text-lg;
  }

  img {
    @apply object-cover h-64 w-full;
  }

  ul {
    @apply list-disc m-4;
  }

  ol {
    @apply list-decimal m-4;
  }
}
</style>
