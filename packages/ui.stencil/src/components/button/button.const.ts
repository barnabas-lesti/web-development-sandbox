import { type ButtonComponentMode, type ButtonComponentType } from "./button.types";

export const BUTTON_COMPONENT_TYPES = ["submit", "button"] as const;

export const DEFAULT_BUTTON_COMPONENT_TYPE: ButtonComponentType = "button";

export const BUTTON_COMPONENT_MODES = ["primary", "secondary", "success", "danger"] as const;

export const DEFAULT_BUTTON_COMPONENT_MODE: ButtonComponentMode = "secondary";
