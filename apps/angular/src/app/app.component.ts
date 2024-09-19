import { Component, type OnDestroy, type OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { map, merge, of, type Subscription, tap } from "rxjs";
import { TestType } from "./app.types";

@Component({
  selector: "app-component",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit, OnDestroy {
  title = "WDS - Angular";

  private subscriptions$$: Subscription | undefined;

  constructor() {
    const a: TestType = "a";
    console.debug(a);

    of(null).subscribe();
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
}
