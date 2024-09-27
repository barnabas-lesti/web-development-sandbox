import { createApp } from "vue";

import { defineCustomElements } from "@wds/ui.stencil/loader";

import { AppComponent } from "./app";

import "@wds/ui.stencil/themes/base.css";
import "./index.css";

defineCustomElements(window);

createApp(AppComponent).mount("#app_root");
