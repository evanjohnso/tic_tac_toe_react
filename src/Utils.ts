import { loanDenial, minimumCreditScore } from "./Constants";
import { AutoLoanApplication, LoanApplicationResponse } from "./Types";

export function canCustomerAffordLoan(
  income?: number,
  carPrice?: number
): boolean {
  if (income && carPrice) {
    return carPrice * 5 < income; // must be 1/5 of annual income
  }
  return false;
}

export function isValidCreditScore(score?: number): boolean {
  return score ? score >= minimumCreditScore : false;
}

export function classNames(...args: (string | false | undefined)[]): string {
  return args.filter((n) => !!n).join(" ");
}

export function determineLoanApproval(
  loan: AutoLoanApplication
): LoanApplicationResponse {
  if (
    !isValidCreditScore(loan.creditScore) ||
    !canCustomerAffordLoan(loan.income, loan.purchacePrice)
  ) {
    return {
      approved: false,
      message: loanDenial,
    };
  } else {
    return {
      approved: true,
    };
  }
}
