import { useEffect, useRef } from "react";

import { type InputComponentValidators } from "@wds/ui.stencil";

import "./app.module.css";

const firstNameInputValidators: InputComponentValidators = [
  {
    id: "required",
    errorMessage: "This field is required",
    validatorFunction(newValue: string) {
      return !!newValue;
    },
  },
];

export const AppComponent: React.FC = () => {
  const firstNameInput = useRef<HTMLWdsInputElement>(null);

  useEffect(() => {
    firstNameInput.current!.validators = firstNameInputValidators;
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
