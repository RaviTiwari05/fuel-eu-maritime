import { Router } from "express";
import { BankingRepository } from "../../outbound/mysql/BankingRepository";
import { BankSurplusUseCase } from "../../../core/application/BankSurplusUseCase";
import { ApplyBankingUseCase } from "../../../core/application/ApplyBankingUseCase";

const router = Router();
const repo = new BankingRepository();

router.get("/records", async (req, res) => {
  const { shipId, year } = req.query;
  const entries = await repo.getAll(String(shipId), Number(year));
  res.json(entries);
});

router.post("/bank", async (req, res) => {
  const { shipId, year, amount } = req.body;
  const usecase = new BankSurplusUseCase(repo);
  await usecase.execute(shipId, year, amount);
  res.json({ message: "Banked successfully" });
});

router.post("/apply", async (req, res) => {
  const { shipId, year, amount } = req.body;
  const usecase = new ApplyBankingUseCase(repo);
  const result = await usecase.execute(shipId, year, amount);
  res.json(result);
});

export default router;
