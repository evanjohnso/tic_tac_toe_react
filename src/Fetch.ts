import { loanDenial } from "./Constants";
import { AutoLoanApplication, LoanApplicationResponse } from "./Types";
import { determineLoanApproval } from "./Utils";

export function mockEndpoint(
  loan: AutoLoanApplication
): Promise<Partial<Response>> {
  if (loan.purchacePrice && loan.purchacePrice > 1000000) {
    // bad response if a million dollar vehicle
    const badRequest: Partial<Response> = {
      ok: false,
      status: 400,
      json: () =>
        Promise.resolve({
          approved: false,
          message: loanDenial,
        }),
    };
    return Promise.resolve(badRequest);
  } else {
    // loan may still be denied, but its a valid request
    const success: Partial<Response> = {
      ok: true,
      status: 200,
      json: () => Promise.resolve(determineLoanApproval(loan)),
    };
    return Promise.resolve(success);
  }
}
