import { BankingPort } from "../ports/BankingPort";

export class BankingUseCase {
  constructor(private repo: BankingPort) {}

  async getRecords(shipId: string, year: number) {
    return this.repo.getRecords(shipId, year);
  }

  async bank(data: any) {
    return this.repo.bank(data);
  }

  async apply(data: any) {
    return this.repo.apply(data);
  }
}
