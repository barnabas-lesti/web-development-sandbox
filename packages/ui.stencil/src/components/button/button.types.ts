import { type BUTTON_COMPONENT_MODES, type BUTTON_COMPONENT_TYPES } from "./button.const";

export type ButtonComponentType = (typeof BUTTON_COMPONENT_TYPES)[number];

export type ButtonComponentMode = (typeof BUTTON_COMPONENT_MODES)[number];
