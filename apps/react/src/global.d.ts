/// <reference types="vite/client" />

declare global {}

declare namespace JSX {
  interface IntrinsicElements {
    [tagName: string]: unknown;
  }
}
