import { type Routes } from "@angular/router";

export const EXAMPLE_ROUTES: Routes = [
  {
    path: "example",
    loadComponent: () => import("./example.page").then(({ ExamplePage }) => ExamplePage),
  },
];
