<template>
  <div id="recipe" v-if="recipe">
    <h1>{{ recipe.name }}</h1>
    <img :src="image" />
    <ul>
      <li :key="i" v-for="(ingredient, i) in recipe.recipeIngredient">
        {{ ingredient }}
      </li>
    </ul>
    <ol>
      <li :key="i" v-for="(step, i) in instructions">
        {{ step }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Recipe } from "schema-dts";

export default defineComponent({
  name: "Recipe",
  data() {
    return {
      recipeUrl: this.$route.query.url || this.$route.query.text,
      recipe: null as Recipe,
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
  methods: {
    async loadRecipe(): Promise<void> {
      const { recipe } = await fetch(
        `https://us-west1-tldrecipe.cloudfunctions.net/fetchRecipe?url=${encodeURIComponent(
          this.recipeUrl
        )}`,
        { method: "POST" }
      ).then((r) => r.json());
      if (recipe) {
        this.recipe = recipe as Recipe;
      }
    },
  },
  async created() {
    await this.loadRecipe();
  },
});
</script>

<style lang="postcss">
#recipe {
  h1 {
    @apply font-display text-2xl;
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
