import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-component",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = "WDS - Angular";

  inputValue = "";

  onWdsButtonClick() {
    this.inputValue = "";
  }
}
