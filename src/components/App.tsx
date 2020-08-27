import * as React from "react";
import { mockEndpoint } from "../Fetch";
import { AutoLoanApplication, LoanApplicationResponse } from "../Types";
import { AutoLoanForm } from "./AutoLoanForm";
import { LoanDenialPage } from "./LoanDenialPage";
import { NewAccountForm } from "./NewAccountForm";

export const App: React.FC = (props) => {
  const [response, setResponse] = React.useState<
    LoanApplicationResponse | undefined
  >(undefined);

  function handleSubmit(loan: AutoLoanApplication): void {
    mockEndpoint(loan).then((r) => {
      if (r.ok && r.json) {
        r.json().then(setResponse);
      } else {
        alert(`Bad Request. Status Code: ${r.status}`);
      }
    });
  }

  // routing seems out of scope, so doing a simple state switch to render components
  return (
    <div>
      {response == undefined && <AutoLoanForm onSubmit={handleSubmit} />}
      {response?.approved && <NewAccountForm />}
      {response && !response.approved && (
        <LoanDenialPage response={response!} />
      )}
    </div>
  );
};
