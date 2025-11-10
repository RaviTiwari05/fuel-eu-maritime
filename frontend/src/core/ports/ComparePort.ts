import { Comparison } from "../domain/Comparison";

export interface ComparePort {
  getComparison(): Promise<Comparison[]>;
}
