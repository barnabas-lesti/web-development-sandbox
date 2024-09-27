<script setup lang="ts"></script>

<template>
  <wds-container>
    <wds-column>
      <h2>Example form</h2>
    </wds-column>
    <wds-column>
      <wds-container>
        <wds-column size-md="6">
          <wds-input label="First name" />
        </wds-column>
        <wds-column size-md="6">
          <wds-input label="Last name" />
        </wds-column>
      </wds-container>
    </wds-column>

    <wds-column>
      <wds-container direction="right-to-left">
        <wds-column size="3"><wds-button mode="primary">Save</wds-button></wds-column>
        <wds-column size="3"><wds-button>Cancel</wds-button></wds-column>
      </wds-container>
    </wds-column>
  </wds-container>
</template>
