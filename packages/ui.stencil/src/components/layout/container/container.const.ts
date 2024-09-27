import { type ContainerComponentDirection } from "./container.types";

export const CONTAINER_COMPONENT_DIRECTIONS = ["right-to-left", "left-to-right"] as const;

export const DEFAULT_CONTAINER_COMPONENT_DIRECTIONS: ContainerComponentDirection = "left-to-right";
