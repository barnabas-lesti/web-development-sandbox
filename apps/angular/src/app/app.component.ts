import { Component, CUSTOM_ELEMENTS_SCHEMA, type OnDestroy, type OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { map, merge, of, type Subscription, tap } from "rxjs";

import { AppService } from "./app.service";
import { type TestType } from "./app.types";

@Component({
  selector: "app-component",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  standalone: true,
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "WDS - Angular";

  private subscriptions$$: Subscription | undefined;

  constructor(private readonly appService: AppService) {
    void this.appService;
    const a: TestType = "a";
    console.debug(a);
  }

  ngOnInit(): void {
    this.subscriptions$$ = merge(
      of(null).pipe(
        map(() => "c"),
        tap((value) => console.debug(value)),
      ),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions$$?.unsubscribe();
  }

  /**
   * Test function.
   * @param value Something.
   * @returns Anything.
   */
  foo(value: string) {
    return "bar" + value;
  }

  onNativeButtonClick() {
    console.debug("native click");
  }

  onWebComponentButtonClick() {
    console.debug("web component click");
  }

  onWebComponentInput(event: Event) {
    console.debug((event.target as HTMLInputElement).value);
  }
}
