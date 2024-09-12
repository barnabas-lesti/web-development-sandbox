import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent, APP_BROWSER_CONFIG } from "./app";

bootstrapApplication(AppComponent, APP_BROWSER_CONFIG).catch((error) =>
  console.error(error)
);
