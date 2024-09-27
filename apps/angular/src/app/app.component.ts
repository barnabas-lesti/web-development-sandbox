import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

import { InputComponentValidators } from "@wds/ui.stencil";

@Component({
  selector: "app-component",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  firstNameInputValidators: InputComponentValidators = [
    {
      id: "required",
      errorMessage: "This field is required",
      validatorFunction(newValue: string) {
        return !!newValue;
      },
    },
  ];
}
