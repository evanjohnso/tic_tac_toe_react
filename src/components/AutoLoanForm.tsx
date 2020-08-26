import React from "react";
import { TextField, Button } from "@material-ui/core";
import { AutoLoanApplication } from "../Types";
import { autoLoan } from "../Fetch";
import { NewAccountForm } from "./NewAccountForm";
import { LoanDenialPage } from "./LoanDenialPage";

interface IAutoLoanProps {
  onSubmit: (loan: AutoLoanApplication) => void;
}

type FormState = AutoLoanApplication & {};
type InputFields = keyof AutoLoanApplication;

const fields: Array<InputFields> = [
  "purchacePrice",
  "carMake",
  "carModel",
  "income",
  "creditScore",
];

function getLabelForInput(field: InputFields): string {
  switch (field) {
    case "carMake":
      return "Make";
    case "carModel":
      return "Model";
    case "purchacePrice":
      return "Purchase Price";
    case "income":
      return "Income";
    case "creditScore":
      return "Credit Score";
  }
}

function getInputType(field: InputFields): "number" | "text" {
  switch (field) {
    case "carMake":
    case "carModel":
      return "text";
    case "purchacePrice":
    case "income":
    case "creditScore":
      return "number";
  }
}

type Action = { type: "fieldUpdate"; key: InputFields; e: any };

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "fieldUpdate":
      return { ...state, [action.key]: action.e?.target?.value };
  }
}

export const AutoLoanForm: React.FC<IAutoLoanProps> = (props) => {
  const [state, dispatch] = React.useReducer(reducer, {});

  function onInputChange(event: any, key: InputFields): void {
    dispatch({ type: "fieldUpdate", key, e: event });
  }

  return (
    <div className="column">
      {fields.map((field) => {
        return (
          <TextField
            key={field}
            label={getLabelForInput(field)}
            value={state[field]}
            onChange={(e) => onInputChange(e, field)}
            type={getInputType(field)}
          />
        );
      })}
      <Button onClick={() => props.onSubmit(state)}>Submit</Button>
    </div>
  );
};
