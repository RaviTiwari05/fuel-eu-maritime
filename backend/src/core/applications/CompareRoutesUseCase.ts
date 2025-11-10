import { RoutesRepositoryPort } from "../ports/RoutesRepositoryPort";
import { percentDiff } from "../../shared/utils";

export class CompareRoutesUseCase {
  constructor(private repo: RoutesRepositoryPort) {}

  async execute() {
    const routes = await this.repo.getAll();
    const baseline = await this.repo.getBaseline();
    if (!baseline) throw new Error("No baseline route set.");

    return routes.map(r => ({
      route: r,
      diff: percentDiff(baseline.ghgIntensity, r.ghgIntensity),
      compliant: r.ghgIntensity <= baseline.ghgIntensity
    }));
  }
}
