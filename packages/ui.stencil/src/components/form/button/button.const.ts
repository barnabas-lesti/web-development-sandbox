import { type WdsButtonMode, type WdsButtonType } from "./button.types";

export const WDS_BUTTON_TYPES = ["submit", "button"] as const;

export const DEFAULT_WDS_BUTTON_TYPE: WdsButtonType = "button";

export const WDS_BUTTON_MODES = ["primary", "secondary", "success", "danger", "error"] as const;

export const DEFAULT_WDS_BUTTON_MODE: WdsButtonMode = "secondary";
