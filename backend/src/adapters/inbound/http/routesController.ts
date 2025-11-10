import { Router } from "express";
import { RoutesRepository } from "../../outbound/mysql/RoutesRepository";
import { CompareRoutesUseCase } from "../../../core/application/CompareRoutesUseCase";

const router = Router();
const repo = new RoutesRepository();

router.get("/", async (_req, res) => {
  const routes = await repo.getAll();
  res.json(routes);
});

router.post("/:id/baseline", async (req, res) => {
  await repo.setBaseline(Number(req.params.id));
  res.json({ message: "Baseline updated" });
});

router.get("/comparison", async (_req, res) => {
  const usecase = new CompareRoutesUseCase(repo);
  const result = await usecase.execute();
  res.json(result);
});

export default router;
