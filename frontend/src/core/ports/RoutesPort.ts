import { Route } from "../domain/Route";

export interface RoutesPort {
  getAllRoutes(): Promise<Route[]>;
  setBaseline(id: number): Promise<void>;
}
