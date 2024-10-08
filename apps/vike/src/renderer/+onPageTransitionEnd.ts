import type { OnPageTransitionEndAsync } from "vike/types";

export const onPageTransitionEnd: OnPageTransitionEndAsync = async (): ReturnType<OnPageTransitionEndAsync> => {
  console.debug("Page transition end");
  document.querySelector("body")!.classList.remove("page-is-transitioning");
};
