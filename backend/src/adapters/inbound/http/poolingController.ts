import { Router } from "express";
import { PoolingRepository } from "../../outbound/mysql/PoolingRepository";
import { CreatePoolUseCase } from "../../../core/application/CreatePoolUseCase";

const router = Router();
const repo = new PoolingRepository();

router.post("/", async (req, res) => {
  const usecase = new CreatePoolUseCase(repo);
  const result = await usecase.execute(req.body);
  res.json(result);
});

export default router;
