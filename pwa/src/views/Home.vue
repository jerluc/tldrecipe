<template>
  <form @submit.prevent="goToRecipe">
    <h1>
      <img src="/favicon.png" />
      <span>TL;DRecipe</span>
    </h1>
    <div class="box">
      <input
        type="text"
        placeholder="Recipe web page URL"
        v-model="recipeUrl"
      />
      <button class="material-icons">arrow_forward</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      recipeUrl: "",
    };
  },
  methods: {
    goToRecipe() {
      this.$router.push({ name: "Recipe", query: { url: this.recipeUrl } });
    },
  },
});
</script>

<style lang="postcss">
form {
  @apply flex flex-col items-center m-12;

  h1 {
    @apply text-black flex items-center font-display text-2xl;

    img {
      @apply h-8 ml--8 mr-2;
    }
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
</style>
