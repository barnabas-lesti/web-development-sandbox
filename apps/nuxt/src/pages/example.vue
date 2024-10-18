<script setup lang="ts">
import { useHead } from "#imports";

import { ExampleComponent } from "../features/example";

useHead({
  title: "Example",
});
</script>

<template>
  <h1>Example</h1>

  <div class="mb-1">
    <NuxtLink href="/">Home</NuxtLink>
  </div>

  <ExampleComponent />
</template>
