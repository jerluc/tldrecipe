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
      const url = `https://cors-anywhere.herokuapp.com/${this.recipeUrl}`;
      const html = await fetch(url).then((r) => r.text());
      const doc = new DOMParser().parseFromString(html, "text/html");
      const schemaOrgs = Array.from(
        doc.querySelectorAll("script[type='application/ld+json']")
      );
      const recipes = schemaOrgs
        .map((s) => {
          if (s.textContent) {
            const c = JSON.parse(s.textContent);
            if (c["@type"] === "Recipe") {
              return c;
            }
          }
          return null;
        })
        .filter((c) => !!c!);
      if (recipes.length > 0) {
        this.recipe = recipes[0] as Recipe;
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
