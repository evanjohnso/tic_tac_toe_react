import { TextField } from "@material-ui/core";
import React from "react";
import { AutoLoanApplication } from "../Types";
import { Button } from "./Button";
import { CreditScoreSlider, creditScore } from "./CreditScoreSlider";
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

const initialState: FormState = {
  creditScore: creditScore.lowerBound, // initialize credit score for slider consistency
};

type Action = { type: "fieldUpdate"; key: InputFields; value: any };

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "fieldUpdate":
      // this is strange, shouldnt have to do this transformation
      const value =
        getInputType(action.key) == "number"
          ? Number(action.value)
          : action.value;
      return { ...state, [action.key]: value };
  }
}

function isValidForm(state: FormState): boolean {
  // valid if no fields are empty
  return !fields.map((f) => Boolean(state[f])).includes(false);
}
export const AutoLoanForm: React.FC<IAutoLoanProps> = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  function onInputChange(e: any, key: InputFields): void {
    dispatch({ type: "fieldUpdate", key, value: e.target.value });
  }

  function onSliderChange(val: number): void {
    dispatch({ type: "fieldUpdate", key: "creditScore", value: val });
  }

  return (
    <div className="column" style={{ width: "30%" }}>
      {fields.map((field) => {
        if (field === "creditScore") {
          return <CreditScoreSlider onChange={onSliderChange} />;
        }
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
      <Button
        onClick={() => props.onSubmit(state)}
        isDisabled={!isValidForm(state)}
        text={"Submit"}
      />
    </div>
  );
};
