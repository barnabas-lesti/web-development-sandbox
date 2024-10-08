import React from "react";
import { useContext } from "react";
import type { PageContext } from "vike/types";

type PageContextProviderProps = React.PropsWithChildren<{
  pageContext: PageContext;
}>;

type UsePageContextFunction = () => PageContext;

const Context = React.createContext<PageContext>(undefined as unknown as PageContext);

export const PageContextProvider: React.FC<PageContextProviderProps> = (props) => {
  return <Context.Provider value={props.pageContext}>{props.children}</Context.Provider>;
};

export const usePageContext: UsePageContextFunction = () => {
  const pageContext = useContext(Context);
  return pageContext;
};
