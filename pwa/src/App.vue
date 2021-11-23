<template>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="postcss">
html,
body {
  @apply subpixel-antialiased bg-fresh-banana text-burnt-banana;
}

#app {
  @apply absolute inset-0 h-screen w-screen;
}

main {
  @apply font-body flex flex-col items-center justify-center h-full w-full overflow-auto;

  & > * {
    @apply max-w-xl;
  }
}
</style>
