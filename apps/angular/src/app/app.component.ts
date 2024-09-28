import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

import { WdsExample } from "@wds/ui.angular";

@Component({
  selector: "app-component",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  standalone: true,
  imports: [RouterOutlet, FormsModule, WdsExample],
})
export class AppComponent {
  foo() {
    void 1;
  }
}
