import { bootstrapApplication } from "@angular/platform-browser";

import { APP_BROWSER_CONFIG, AppComponent } from "./app";

bootstrapApplication(AppComponent, APP_BROWSER_CONFIG).catch((error) => console.error(error));
