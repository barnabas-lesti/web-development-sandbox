import { type PageContext } from "vike/types";

import { usePageContext } from "../../renderer";

export const Page: React.FC = () => {
  const pageContext = usePageContext();
  const errorMessage = getErrorMessage(pageContext);

  return (
    <>
      <h1>Error</h1>
      <pre>{errorMessage}</pre>
    </>
  );
};

function getErrorMessage(pageContext: PageContext) {
  if (pageContext.abortReason) {
    return pageContext.abortReason;
  }

  if (pageContext.is404) {
    return "Page not found.";
  }

  return "Something went wrong.";
}
