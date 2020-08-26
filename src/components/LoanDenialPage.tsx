import * as React from "react";
import { customerServiceEmail } from "../Constants";
import { LoanApplicationResponse } from "../Types";

interface ILoanDenialProps {
  response: LoanApplicationResponse;
}

export const LoanDenialPage: React.FC<ILoanDenialProps> = (props) => {
  return (
    <div className={"column"}>
      <div className="row">{props.response.message}</div>
      <div className="row">
        Please contact us at <span>{customerServiceEmail}</span> if you have any
        further questions
      </div>
    </div>
  );
};
