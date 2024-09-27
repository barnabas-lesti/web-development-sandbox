<script setup lang="ts">
import BoxComponent from "./box.component.vue";
</script>

<template>
  <h1>Vue</h1>

  <wds-container>
    <wds-column>
      <h2>Container and Columns</h2>
    </wds-column>
    <wds-column>
      <wds-container>
        <wds-column size-md="6">
          <BoxComponent />
        </wds-column>
        <wds-column size-md="6">
          <BoxComponent />
        </wds-column>
      </wds-container>
    </wds-column>

    <wds-column>
      <wds-container>
        <wds-column
          size="6"
          size-md="4"
          size-lg="3"
        >
          <BoxComponent />
        </wds-column>
        <wds-column
          size="6"
          size-md="4"
          size-lg="3"
        >
          <BoxComponent />
        </wds-column>
        <wds-column
          size="12"
          size-md="4"
          size-lg="3"
        >
          <BoxComponent />
        </wds-column>
      </wds-container>
    </wds-column>
  </wds-container>
</template>

<style scoped>
.margin-bottom {
  margin-bottom: var(--wds-gap);
}
</style>
