import { PoolingPort } from "../ports/PoolingPort";

export class PoolingUseCase {
  constructor(private repo: PoolingPort) {}

  async createPool(data: any) {
    return this.repo.createPool(data);
  }
}
