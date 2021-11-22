<template>
  <main>
    <form @submit.prevent="fetchRecipe">
      <h1>TL;DRecipe</h1>
      <div class="box">
        <input
          type="text"
          placeholder="Recipe web page URL"
          v-model="recipeUrl"
        />
        <button class="material-icons">arrow_forward</button>
      </div>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      recipeUrl: "",
      recipe: null,
    };
  },
  methods: {
    async fetchRecipe(): Promise<void> {
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
      if (recipes.length === 0) {
        this.recipe = null;
      } else {
        this.recipe = recipes[0];
        console.log(recipes[0]);
      }
    },
  },
});
</script>

<style lang="postcss">
html,
body {
  @apply subpixel-antialiased bg-fresh-banana text-burnt-banana;
}

#app {
  @apply fixed inset-0;
}

main {
  @apply font-body flex flex-col items-center justify-center h-screen;

  form {
    @apply flex flex-col items-center m-12;

    h1 {
      @apply font-display text-2xl;
    }

    .box {
      @apply flex flex-nowrap items-center border-b-2 border-current mt-2 p-1;

      input[type="text"] {
        @apply placeholder-current outline-none bg-transparent p-2;
      }

      button {
        @apply bg-burnt-banana text-fresh-banana rounded-full text-sm px-1 animate-bounce motion-reduce:animate-none;
      }
    }
  }
}
</style>
