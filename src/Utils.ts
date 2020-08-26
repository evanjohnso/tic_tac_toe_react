import { minimumCreditScore } from "./Constants";

export function canCustomerAffordLoan(
  income?: number,
  carPrice?: number
): boolean {
  if (income && carPrice) {
    return carPrice * 5 > income; // must be 1/5 of annual income
  }
  return false;
}

export function isValidCreditScore(score?: number): boolean {
  return score ? score < minimumCreditScore : false;
}
