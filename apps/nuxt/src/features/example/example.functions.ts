import { ref } from "vue";
import type { Person } from "./example.types";

export const createPerson = () =>
  ref<Person>({
    id: "",
    firstName: "",
    lastName: "",
  });
