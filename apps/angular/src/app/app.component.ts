import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

import { WdsButton } from "@wds/ui.mitosis/angular";

@Component({
  selector: "app-component",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  standalone: true,
  imports: [RouterOutlet, FormsModule, WdsButton],
})
export class AppComponent {
  foo() {
    void 0;
  }
}
