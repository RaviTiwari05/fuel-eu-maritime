export interface BankRecord {
  shipId: string;
  year: number;
  amount: number;
}

export interface ApplyResult {
  applied: number;
  remaining: number;
}
