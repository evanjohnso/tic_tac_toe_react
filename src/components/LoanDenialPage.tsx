import * as React from "react";
import { customerServiceEmail } from "../Constants";

interface ILoanDenialProps {
  message?: string;
}

export const LoanDenialPage: React.FC<ILoanDenialProps> = (props) => {
  return (
    <div className={"column"}>
      {props.message}
      {`Please contact us at ${customerServiceEmail} if you have any further questions`}
    </div>
  );
};
