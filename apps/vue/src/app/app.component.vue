<script setup lang="ts">
import { ref, watch } from "vue";

import { HelloWorldComponent } from "./hello-world";

const inputValue = ref("");

watch(inputValue, (newValue, oldValue) => {
  console.debug("oldValue", oldValue);
  console.debug("newValue", newValue);
});
</script>

<template>
  <div>
    <wds-button
      aria-label="Button aria label."
      @click="() => (inputValue = '')"
    >
      Reset input
    </wds-button>

    <wds-input
      v-model="inputValue"
      aria-label="Input aria label."
      placeholder="Lorem ipsum"
    />
  </div>

  <div>
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      />
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="./assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      />
    </a>
  </div>
  <HelloWorldComponent msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
