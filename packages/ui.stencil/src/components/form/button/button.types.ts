import { type WDS_BUTTON_MODES, type WDS_BUTTON_TYPES } from "./button.const";

export type WdsButtonType = (typeof WDS_BUTTON_TYPES)[number];

export type WdsButtonMode = (typeof WDS_BUTTON_MODES)[number];
