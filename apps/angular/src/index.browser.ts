import { bootstrapApplication } from "@angular/platform-browser";

import { defineCustomElements } from "@wds/ui.stencil/loader";

import { APP_BROWSER_CONFIG, AppComponent } from "./app";

defineCustomElements(window);

bootstrapApplication(AppComponent, APP_BROWSER_CONFIG).catch((error) => console.error(error));
