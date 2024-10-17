<script setup lang="ts">
import { useAppConfig, useHead } from "#app";

const appConfig = useAppConfig();

useHead({
  titleTemplate: (pageTitle) => (pageTitle ? `${pageTitle} | ${appConfig.appName}` : appConfig.appName),
});
</script>

<template>
  <NuxtPage />
</template>

<style>
@font-face {
  font-family: "Nunito";
  src: url("/fonts/Nunito-VariableFont_wght.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

:root {
  --gap: 1rem;
  --font-family: "Nunito", sans-serif;
}

body {
  font-family: var(--font-family);
}

h1,
p {
  margin: 0 0 var(--gap);
}

.mb-1 {
  margin-bottom: var(--gap);
}
</style>
