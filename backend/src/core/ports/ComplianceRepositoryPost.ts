import { ComplianceRecord } from "../domain/Compliance";

export interface ComplianceRepositoryPort {
  save(record: ComplianceRecord): Promise<void>;
  find(shipId: string, year: number): Promise<ComplianceRecord | null>;
}
