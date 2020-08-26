import * as React from "react";
import { autoLoan } from "../Fetch";
import { AutoLoanApplication, LoanApplicationResponse } from "../Types";
import { AutoLoanForm } from "./AutoLoanForm";
import { LoanDenialPage } from "./LoanDenialPage";
import { NewAccountForm } from "./NewAccountForm";

type FormStatus = "pending" | "approved" | "denied";

export const App: React.FC = (props) => {
  const [response, setResponse] = React.useState<
    LoanApplicationResponse | undefined
  >(undefined);

  function handleSubmit(loan: AutoLoanApplication): void {
    autoLoan(loan).then(setResponse);
  }

  return (
    <div className={"column"}>
      {response == undefined && <AutoLoanForm onSubmit={handleSubmit} />}
      {response?.approved && <NewAccountForm />}
      {response && !response.approved && (
        <LoanDenialPage response={response!} />
      )}
    </div>
  );
};
