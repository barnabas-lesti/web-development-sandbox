import { type Routes } from "@angular/router";

import { HOME_ROUTES } from "../home";

export const APP_ROUTES: Routes = [
  ...HOME_ROUTES,

  {
    path: "**",
    redirectTo: "/",
  },
];
