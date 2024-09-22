/// <reference types="vite/client" />

import { type JSX as WdsUiJsx } from "@wds/ui.stencil";

declare global {
  namespace JSX {
    interface IntrinsicElements extends WdsUiJsx.IntrinsicElements {}
  }
}
