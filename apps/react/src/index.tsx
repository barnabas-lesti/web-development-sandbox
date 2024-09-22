import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { defineCustomElements } from "@wds/ui.stencil/loader";

import { AppComponent } from "./app";

import "./index.css";

defineCustomElements(window);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("app_root")!).render(
  <StrictMode>
    <>
      <a href="/"></a>
      <sui-button>Stencil button</sui-button>
      <sui-input />
      <AppComponent />
    </>
  </StrictMode>,
);
