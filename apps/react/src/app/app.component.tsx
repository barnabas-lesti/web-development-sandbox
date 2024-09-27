import { useEffect, useRef } from "react";

import { createRequiredValidator } from "@wds/ui.stencil";

import "./app.module.css";

export const AppComponent: React.FC = () => {
  const firstNameInput = useRef<HTMLWdsInputElement>(null);

  useEffect(() => {
    firstNameInput.current!.validators = [createRequiredValidator("This react field is required.")];
  }, []);

  return (
    <>
      <h1>React</h1>

      <wds-container>
        <wds-column>
          <h2>Example form</h2>
        </wds-column>
        <wds-column>
          <wds-input
            ref={firstNameInput}
            label="First name"
          />
        </wds-column>
      </wds-container>
    </>
  );
};
