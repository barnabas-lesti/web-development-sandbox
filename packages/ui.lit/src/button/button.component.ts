import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * Project UI button component.
 * @slot Native HTML button component.
 */
@customElement("lui-button")
export class ButtonComponent extends LitElement {
  static styles = css`
    ::slotted(button) {
      background-color: red;
    }
  `;

  render() {
    return html`<slot />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lui-button": ButtonComponent;
  }
}
