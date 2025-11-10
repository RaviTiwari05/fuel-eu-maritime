import { BankingRepositoryPort } from "../ports/BankingRepositoryPort";

export class BankSurplusUseCase {
  constructor(private repo: BankingRepositoryPort) {}

  async execute(shipId: string, year: number, amount: number) {
    if (amount <= 0) throw new Error("Cannot bank non-positive amount.");
    await this.repo.add({ shipId, year, amount });
  }
}
