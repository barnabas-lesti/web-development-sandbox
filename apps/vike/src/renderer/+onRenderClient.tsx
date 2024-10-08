import ReactDOM from "react-dom/client";
import type { OnRenderClientAsync } from "vike/types";

import { PageContextProvider } from "./pageContext";
import { getPageTitle } from "./pageTitle";

console.debug("+onRenderClient");

let root: ReactDOM.Root;

export const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  console.debug("onRenderClient()");

  const { Page } = pageContext;

  // This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
  // to support SPA
  if (!Page) throw new Error("My onRenderClient() hook expects pageContext.Page to be defined");

  const container = document.getElementById("react-root");
  if (!container) throw new Error("DOM element #react-root not found");

  const page = (
    <PageContextProvider pageContext={pageContext}>
      <Page />
    </PageContextProvider>
  );

  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
};
