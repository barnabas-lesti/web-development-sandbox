import { bootstrapApplication } from "@angular/platform-browser";

import { APP_SERVER_CONFIG, AppComponent } from "./app";

export default () => bootstrapApplication(AppComponent, APP_SERVER_CONFIG);
