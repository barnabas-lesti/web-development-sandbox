import { type WDS_INPUT_TYPES } from "./input.const";

export type WdsInputType = (typeof WDS_INPUT_TYPES)[number];

export interface WdsInputValidator {
  id: string;
  errorMessage: string;
  validatorFunction: (newValue: string, oldValue: string) => boolean;
}

export type WdsInputValidatorArray = WdsInputValidator[];
