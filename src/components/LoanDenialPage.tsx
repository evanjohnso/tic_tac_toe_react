import * as React from "react";
import { LoanApplicationResponse } from "../Types";
import { Paper } from "@material-ui/core";

interface ILoanDenialProps {
  response: LoanApplicationResponse;
}

export const LoanDenialPage: React.FC<ILoanDenialProps> = (props) => {
  return (
    <Paper className={"muiPaper"}>
      <div className="column">
        <div className="row" style={{ marginBottom: "20px" }}>
          {props.response.message}
        </div>
        <div className="row">
          Please contact us at support@epicautoloans.com if you have any further
          questions
        </div>
      </div>
    </Paper>
  );
};
