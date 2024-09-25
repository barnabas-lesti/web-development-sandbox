<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wds-gap);
}
</style>
