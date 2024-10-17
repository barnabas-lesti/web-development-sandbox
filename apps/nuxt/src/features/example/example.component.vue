<script setup lang="ts">
import { computed } from "vue";
import { createPerson } from "./example.functions";

const person = createPerson();
const personFullName = computed(() => {
  console.debug("personFullName()");

  const { firstName, lastName } = person.value;
  if (!firstName && !lastName) return "";
  if (!firstName) return lastName;
  if (!lastName) return firstName;
  return firstName + " " + lastName;
});
const personJson = computed(() => {
  console.debug("personJson()");
  return JSON.stringify(person.value);
});
</script>

<template>
  <div class="mb-1">
    <input
      v-model="person.id"
      type="text"
      placeholder="ID"
    />
  </div>
  <div class="mb-1">
    <input
      v-model="person.firstName"
      type="text"
      placeholder="First name"
    />
  </div>
  <div class="mb-1">
    <input
      v-model="person.lastName"
      type="text"
      placeholder="Last name"
    />
  </div>
  <p>Full name: {{ personFullName }}</p>
  <pre>{{ personJson }}</pre>
</template>
