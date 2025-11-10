import { Router } from "express";
import { ComplianceRepository } from "../../outbound/mysql/ComplianceRepository";
import { ComputeCBUseCase } from "../../../core/application/ComputeCBUseCase";

const router = Router();
const repo = new ComplianceRepository();

router.get("/cb", async (req, res) => {
  const { shipId, year, actualIntensity, fuelConsumption } = req.query;

  const usecase = new ComputeCBUseCase(repo);
  const cb = await usecase.execute(
    String(shipId),
    Number(year),
    Number(actualIntensity),
    Number(fuelConsumption)
  );

  res.json({ cb });
});

export default router;
