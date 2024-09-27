import { type WdsContainerDirection } from "./container.types";

export const WDS_CONTAINER_DIRECTIONS = ["right-to-left", "left-to-right"] as const;

export const DEFAULT_WDS_CONTAINER_DIRECTION: WdsContainerDirection = "left-to-right";
