export interface AutoLoanApplication {
  purchacePrice?: number;
  carMake?: string;
  carModel?: string;
  income?: number;
  creditScore?: number;
}

export interface LoanApplicationResponse {
  approved: boolean;
  message?: string;
}
