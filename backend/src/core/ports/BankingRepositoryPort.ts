import { BankEntry } from "../domain/Banking";

export interface BankingRepositoryPort {
  getAll(shipId: string, year: number): Promise<BankEntry[]>;
  add(entry: BankEntry): Promise<void>;
}
