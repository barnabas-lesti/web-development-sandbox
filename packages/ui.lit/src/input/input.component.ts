import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * Project UI input component.
 * @slot Native HTML input element.
 */
@customElement("lui-input")
export class InputComponent extends LitElement {
  static styles = css``;

  render() {
    return html`<slot />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lui-input": InputComponent;
  }
}
