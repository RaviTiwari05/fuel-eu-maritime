import prisma from "../../../infrastructure/db/prismaClient";
import { BankingRepositoryPort } from "../../../core/ports/BankingRepositoryPort";
import { BankEntry } from "../../../core/domain/Banking";

export class BankingRepository implements BankingRepositoryPort {
  async getAll(shipId: string, year: number): Promise<BankEntry[]> {
    return prisma.bankEntry.findMany({
      where: { shipId, year }
    });
  }

  async add(entry: BankEntry): Promise<void> {
    await prisma.bankEntry.create({ data: entry });
  }
}
