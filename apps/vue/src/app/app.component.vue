<script setup lang="ts">
import ColumnComponent from "./column.component.vue";
import ContainerComponent from "./container.component.vue";
</script>

<template>
  <h1>Vue</h1>

  <ContainerComponent :style="{ 'margin-bottom': 'var(--wds-gap)' }">
    <ColumnComponent><div class="box">Default</div></ColumnComponent>
    <ColumnComponent><div class="box">Default</div></ColumnComponent>
  </ContainerComponent>

  <ContainerComponent>
    <ColumnComponent
      :size="3"
      :size-md="4"
      :size-lg="6"
    >
      <div class="box">sm-3 md-4 lg-6</div>
    </ColumnComponent>
    <ColumnComponent
      :size="6"
      :size-md="4"
      :size-lg="4"
    >
      <div class="box">sm-6 md-4 lg-4</div>
    </ColumnComponent>
    <ColumnComponent
      :size="3"
      :size-md="4"
      :size-lg="2"
    >
      <div class="box">sm-3 md-4 lg-2</div>
    </ColumnComponent>
    <ColumnComponent :size-md="6">
      <div class="box">sm-12 md-6</div>
    </ColumnComponent>
  </ContainerComponent>
</template>

<style scoped>
.box {
  background-color: rgb(82, 82, 212);
}
</style>
