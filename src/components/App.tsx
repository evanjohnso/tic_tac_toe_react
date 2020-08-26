import * as React from "react";
import { autoLoan } from "../Fetch";
import { AutoLoanApplication } from "../Types";
import { AutoLoanForm } from "./AutoLoanForm";
import { LoanDenialPage } from "./LoanDenialPage";
import { NewAccountForm } from "./NewAccountForm";

type FormStatus = "pending" | "approved" | "denied";

export const App: React.FC = (props) => {
  const [status, setStatus] = React.useState<FormStatus>("pending");

  function handleSubmit(loan: AutoLoanApplication): void {
    autoLoan(loan).then((r) => {
      if (r.approved) {
        setStatus("approved");
      } else {
        setStatus("denied");
      }
    });
  }

  return (
    <div className={"column"}>
      {status == "pending" && <AutoLoanForm onSubmit={handleSubmit} />}
      {status == "approved" && <NewAccountForm />}
      {status == "denied" && <LoanDenialPage />}
    </div>
  );
};
