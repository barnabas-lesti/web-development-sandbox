import { type Routes } from "@angular/router";

export const HOME_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import("./home.page").then(({ HomePage }) => HomePage),
  },
];
