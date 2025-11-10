import prisma from "../../../infrastructure/db/prismaClient";
import { ComplianceRepositoryPort } from "../../../core/ports/ComplianceRepositoryPort";
import { ComplianceRecord } from "../../../core/domain/Compliance";

export class ComplianceRepository implements ComplianceRepositoryPort {
  async save(record: ComplianceRecord): Promise<void> {
    await prisma.compliance.upsert({
      where: { shipId_year: { shipId: record.shipId, year: record.year } },
      update: { cb: record.cb },
      create: record
    });
  }

  async find(shipId: string, year: number) {
    return prisma.compliance.findUnique({
      where: { shipId_year: { shipId, year } }
    });
  }
}
