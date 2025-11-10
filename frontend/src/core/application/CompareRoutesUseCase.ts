import { ComparePort } from "../ports/ComparePort";

export class CompareRoutesUseCase {
  constructor(private repo: ComparePort) {}

  async execute() {
    return this.repo.getComparison();
  }
}
