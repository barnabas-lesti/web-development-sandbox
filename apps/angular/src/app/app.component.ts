import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { map, of } from "rxjs";
import { TestType } from "./app.types";

@Component({
  selector: "app-component",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "WDS - Angular";

  constructor() {
    const a: TestType = "a";
    console.log(a);

    of(null)
      .pipe(map(() => "a"))
      .subscribe(async (value) => console.log(value));
  }

  /**
   *
   * @param {string} value Something.
   * @returns
   */
  foo(value: string) {
    return "bar" + value;
  }
}
