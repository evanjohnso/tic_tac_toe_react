import React from "react";
import { TextField } from "@material-ui/core";

interface IAutoLoanProps {}

type LoanState = {
  purchacePrice?: number | undefined;
  carMake?: string | undefined;
  carModel?: string | undefined;
  income?: number | undefined;
  creditScore?: number | undefined;
};

const fields: Array<keyof LoanState> = [
  "purchacePrice",
  "carMake",
  "carModel",
  "income",
  "creditScore",
];

function getLabelForInput(field: keyof LoanState): string {
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

function getInputType(field: keyof LoanState): "number" | "text" {
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

type Action = { type: "fieldUpdate"; key: keyof LoanState; e: any };

function reducer(state: LoanState, action: Action): LoanState {
  switch (action.type) {
    case "fieldUpdate":
      return { ...state, [action.key]: action.e?.target?.value };
  }
}

export const AutoLoanForm: React.FC<IAutoLoanProps> = (props) => {
  const [state, dispatch] = React.useReducer(reducer, {});

  function onInputChange(event: any, key: keyof LoanState): void {
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
    </div>
  );
};
