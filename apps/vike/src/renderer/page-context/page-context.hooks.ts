import { useContext } from "react";
import { type PageContext } from "vike/types";

import { PAGE_CONTEXT } from "./page-context.const";

export function usePageContext(): PageContext {
  const pageContext = useContext(PAGE_CONTEXT);
  return pageContext;
}
