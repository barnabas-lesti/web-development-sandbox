import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AppService {
  private readonly test: number;
  constructor() {
    this.test = 10;
  }
}
