import { TARGET_INTENSITY_2025, ENERGY_FACTOR } from "../../shared/constants";
import { ComplianceRepositoryPort } from "../ports/ComplianceRepositoryPort";

export class ComputeCBUseCase {
  constructor(private repo: ComplianceRepositoryPort) {}

  async execute(shipId: string, year: number, actualIntensity: number, fuelConsumption: number) {
    const energy = fuelConsumption * ENERGY_FACTOR;
    const cb = (TARGET_INTENSITY_2025 - actualIntensity) * energy;

    await this.repo.save({ shipId, year, cb });

    return cb;
  }
}
