import {
  ApplicationConfig,
  provideZoneChangeDetection,
  mergeApplicationConfig,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { APP_ROUTES } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";

import { provideServerRendering } from "@angular/platform-server";

export const APP_BROWSER_CONFIG: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES),
    provideClientHydration(),
  ],
};

export const APP_SERVER_CONFIG = mergeApplicationConfig(APP_BROWSER_CONFIG, {
  providers: [provideServerRendering()],
});
