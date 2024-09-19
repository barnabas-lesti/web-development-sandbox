import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppComponent } from "./app";

import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("app_root")!).render(
  <StrictMode>
    <AppComponent />
  </StrictMode>,
);
