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
      <my-component
        first="Stencil"
        middle="lorem"
        last="'Don't call me a framework' JS"
      ></my-component>
      <AppComponent />
    </>
  </StrictMode>,
);
