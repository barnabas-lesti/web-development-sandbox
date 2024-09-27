import {
  type ApplicationConfig,
  mergeApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideServerRendering } from "@angular/platform-server";
import { provideRouter } from "@angular/router";

import { APP_ROUTES } from "./app.routes";

export const APP_BROWSER_CONFIG: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES), provideClientHydration(), provideExperimentalZonelessChangeDetection()],
};

export const APP_SERVER_CONFIG = mergeApplicationConfig(APP_BROWSER_CONFIG, {
  providers: [provideServerRendering()],
});
