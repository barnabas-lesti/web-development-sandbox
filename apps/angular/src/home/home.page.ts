import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { WdsExample } from "@wds/ui.mitosis/angular";

@Component({
  selector: "app-home-page",
  templateUrl: "./home.page.html",
  standalone: true,
  imports: [WdsExample, RouterModule],
})
export class HomePage {}
