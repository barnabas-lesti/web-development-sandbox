<script setup lang="ts">
import { onMounted, ref } from "vue";

const firstNameInputElement = ref(null);

const firstNameInputValidators = [
  {
    id: "required",
    errorMessage: "This field is required",
    validatorFunction(newValue: string) {
      return !!newValue;
    },
  },
];

onMounted(() => {
  firstNameInputElement.value.validators = firstNameInputValidators;
});
</script>

<template>
  <div ref="first-name-input"></div>
  <wds-container>
    <wds-column>
      <h2>Example form</h2>
    </wds-column>
    <wds-column>
      <wds-container>
        <wds-column size-md="6">
          <wds-input
            ref="firstNameInputElement"
            label="First name"
            :validators="firstNameInputValidators"
          />
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
