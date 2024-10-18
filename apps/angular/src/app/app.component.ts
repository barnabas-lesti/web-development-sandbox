import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { AppService } from "./app.service";

@Component({
  selector: "app-component",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  constructor(private appService: AppService) {}
  foo() {
    void 1;
  }
}
