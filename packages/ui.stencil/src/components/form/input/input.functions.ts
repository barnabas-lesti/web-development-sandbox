import { type WdsInputValidator } from "./input.types";

export function createRequiredValidator(errorMessage?: string): WdsInputValidator {
  return {
    id: "required",
    errorMessage: errorMessage || "This field is required",
    validatorFunction(newValue: string) {
      return !!newValue;
    },
  };
}
