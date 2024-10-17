import { type Routes } from "@angular/router";

import { EXAMPLE_ROUTES } from "../example";
import { HOME_ROUTES } from "../home";

export const APP_ROUTES: Routes = [
  ...HOME_ROUTES,
  ...EXAMPLE_ROUTES,

  {
    path: "**",
    redirectTo: "/",
  },
];
