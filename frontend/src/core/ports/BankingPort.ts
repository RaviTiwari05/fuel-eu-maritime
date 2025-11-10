import { BankRecord, ApplyResult } from "../domain/Banking";

export interface BankingPort {
  getRecords(shipId: string, year: number): Promise<BankRecord[]>;
  bank(data: any): Promise<any>;
  apply(data: any): Promise<ApplyResult>;
}
