import { loanDenial } from "./Constants";
import { AutoLoanApplication, LoanApplicationResponse } from "./Types";
import { canCustomerAffordLoan, isValidCreditScore } from "./Utils";

function mockEndpoint(): Promise<Partial<Response>> {
  const yay: Partial<Response> = {
    ok: true,
    status: 200,
  };
  const boo: Partial<Response> = {
    ok: false,
    status: 401,
  };

  return Promise.resolve(yay);
}

export function autoLoan(
  loan: AutoLoanApplication
): Promise<LoanApplicationResponse> {
  if (
    !isValidCreditScore(loan.creditScore) ||
    !canCustomerAffordLoan(loan.income, loan.purchacePrice)
  ) {
    return Promise.resolve({
      approved: false,
      message: loanDenial,
    });
  } else {
    return Promise.resolve({
      approved: true,
    });
  }
}
