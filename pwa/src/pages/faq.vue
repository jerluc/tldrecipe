<script setup lang="ts">
import { useHead } from "@unhead/vue";

useHead({ title: "Frequently asked questions" });
</script>

<template>
  <div class="w-full md:w-2/3 max-w-2xl m-auto content">
    <h2 class="text-4xl font-bold">Frequently asked questions</h2>
    <h3 class="text-2xl">
      <span class="icon">chevron_right</span>
      What does the name mean?
    </h3>
    <p>
      The name "tl;drecipe" comes from combining the Internet slang
      <a href="https://en.wikipedia.org/wiki/TL;DR" target="_blank"
        >"tl;dr" ("too long; didn't read")</a
      >
      with the word "recipe".
    </p>
    <h3 class="text-2xl">
      <span class="icon">chevron_right</span>
      Why does this website exist?
    </h3>
    <p>
      I got pretty sick and tired of trying to bake the "best chocolate chip
      cookie recipe ever" only to encounter about a 6:3:1 ratio of fluff content
      to ads to actual recipe.
    </p>
    <figure>
      <img
        width="1280"
        height="800"
        class="m-auto"
        src="../assets/images/why-oh-why.webp"
      />
      <figcaption class="italic text-sm p-2">
        I wish I was kidding, but this is the actual experience of reading
        through a recipe on the web today.
      </figcaption>
    </figure>
    <p>
      Now don't get me wrong: I get it, cooking and food in general is a very
      personal thing for lots of folks and they associate a lot of great
      memories with the food they make...but sometimes you just want to read the
      f*cking recipe (RTFR).
    </p>
    <p>
      Also, I frankly don't trust chefs and bakers with ensuring my privacy
      online. So no, I won't be signing up for your newsletter, downloading your
      app (yeah, I've seen this more than once), or accepting your cookies,
      because this is ridiculous:
    </p>
    <figure>
      <img
        width="300"
        height="200"
        class="m-auto"
        src="../assets/images/all-the-ads.png"
      />
      <figcaption class="italic text-sm p-2">
        Believe it or not, this would've been even worse if I wasn't using
        network-level ad blocking!
      </figcaption>
    </figure>
    <h3 class="text-2xl">
      <span class="icon">chevron_right</span>
      So what's the catch?
    </h3>
    <p>
      That's the thing: there is no catch. This website doesn't go sending
      everything you do to a 3rd party advertiser or advertising network. It
      also doesn't try to mine meaningful insights from collecting your data.
      There aren't any user accounts, mailing lists, etc. It's just you and a
      pretty simple website (or
      <a
        href="https://en.wikipedia.org/wiki/Progressive_web_app"
        target="_blank"
        >PWA</a
      >
      if you prefer).
    </p>
    <h3 class="text-2xl">
      <span class="icon">chevron_right</span>
      How can we support you?
    </h3>
    <p>
      As a solo developer of this website, I appreciate any support I can get.
      Aside from the time it takes to maintain the website and servers, running
      the whole thing also costs me a small amount of money every month. So if
      you have found this website to be useful, you can support my efforts by
      sending a small tip or donation through my Ko-fi:
    </p>
    <p class="text-center">
      <a
        class="kofi inline-block"
        href="https://ko-fi.com/L3L21RSVP"
        target="_blank"
      >
        <img
          height="36"
          style="border: 0px; height: 36px"
          src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
    </p>
    <h3 class="text-2xl">
      <span class="icon">chevron_right</span>
      Is tl;drecipe open source?
    </h3>
    <p>
      Not yet! But I am actively working on making it possible to open up for
      contributors.
    </p>
  </div>
</template>

<style scoped lang="scss">
.content > * {
  @apply mb-8;
}

h3 {
  @apply font-medium;

  .icon {
    @apply align-middle text-4xl -mx-2;
  }
}

a {
  &:not(.kofi) {
    @apply bg-salmon hover:bg-white px-2 py-1;
  }
}
</style>
