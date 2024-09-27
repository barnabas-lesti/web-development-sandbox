import { type INPUT_COMPONENT_TYPES } from "./input.const";

export type InputComponentType = (typeof INPUT_COMPONENT_TYPES)[number];

export interface InputComponentValidator {
  id: string;
  errorMessage: string;
  validatorFunction: (newValue: string, oldValue: string) => boolean;
}

export type InputComponentValidators = InputComponentValidator[];
