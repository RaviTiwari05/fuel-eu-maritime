import { Pool } from "../domain/Pooling";
import { PoolingRepositoryPort } from "../ports/PoolingRepositoryPort";

export class CreatePoolUseCase {
  constructor(private repo: PoolingRepositoryPort) {}

  async execute(pool: Pool) {
    const sum = pool.members.reduce((s, m) => s + m.cbBefore, 0);
    if (sum < 0) throw new Error("Pool total CB must be >= 0");

    await this.repo.create(pool);
    return pool;
  }
}
