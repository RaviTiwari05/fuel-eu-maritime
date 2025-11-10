import { RoutesPort } from "../ports/RoutesPort";

export class GetRoutesUseCase {
  constructor(private repo: RoutesPort) {}

  async execute() {
    return this.repo.getAllRoutes();
  }
}
