import { BankingRepositoryPort } from "../ports/BankingRepositoryPort";

export class ApplyBankingUseCase {
  constructor(private repo: BankingRepositoryPort) {}

  async execute(shipId: string, year: number, amount: number) {
    const entries = await this.repo.getAll(shipId, year);
    const total = entries.reduce((sum, e) => sum + e.amount, 0);

    if (amount > total) {
      throw new Error("Not enough banked surplus available.");
    }

    return { applied: amount, remaining: total - amount };
  }
}
