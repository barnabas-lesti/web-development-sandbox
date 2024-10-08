import React from "react";
import type { PageContext } from "vike/types";

import { PAGE_CONTEXT } from "./page-context.const";

export function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) {
  return <PAGE_CONTEXT.Provider value={pageContext}>{children}</PAGE_CONTEXT.Provider>;
}
