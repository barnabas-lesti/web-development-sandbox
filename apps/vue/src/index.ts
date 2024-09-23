import { createApp } from "vue";

import { defineCustomElements } from "@wds/ui.stencil/loader";

import { AppComponent } from "./app";

import "./index.css";

import "@wds/ui.lit";

defineCustomElements(window);

createApp(AppComponent).mount("#app_root");
