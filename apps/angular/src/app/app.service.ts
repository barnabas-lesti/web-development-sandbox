import { Injectable } from "@angular/core";

import { type TestType } from "./app.types";

@Injectable({ providedIn: "root" })
export class AppService {
  private readonly test: TestType;
  constructor() {
    this.test = "a";
  }

  getTest(): TestType {
    return this.test;
  }
}
