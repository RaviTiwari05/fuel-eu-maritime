import { Pool } from "../domain/Pooling";

export interface PoolingRepositoryPort {
  create(pool: Pool): Promise<void>;
}
