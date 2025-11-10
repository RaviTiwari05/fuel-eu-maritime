import prisma from "../../../infrastructure/db/prismaClient";
import { PoolingRepositoryPort } from "../../../core/ports/PoolingRepositoryPort";
import { Pool } from "../../../core/domain/Pooling";

export class PoolingRepository implements PoolingRepositoryPort {
  async create(pool: Pool): Promise<void> {
    await prisma.pool.create({
      data: {
        year: pool.year,
        members: {
          create: pool.members.map(m => ({
            shipId: m.shipId,
            cbBefore: m.cbBefore,
            cbAfter: m.cbAfter
          }))
        }
      }
    });
  }
}
