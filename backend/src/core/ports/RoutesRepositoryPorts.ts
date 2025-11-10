import { Route } from "../domain/Route";

export interface RoutesRepositoryPort {
  getAll(): Promise<Route[]>;
  setBaseline(id: number): Promise<void>;
  getBaseline(): Promise<Route | null>;
}
