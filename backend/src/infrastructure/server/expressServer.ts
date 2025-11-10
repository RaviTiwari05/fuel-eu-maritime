import express from "express";
import cors from "cors";
import routesController from "../../adapters/inbound/http/routesController";
import complianceController from "../../adapters/inbound/http/complianceController";
import bankingController from "../../adapters/inbound/http/bankingController";
import poolingController from "../../adapters/inbound/http/poolingController";

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/routes", routesController);
  app.use("/compliance", complianceController);
  app.use("/banking", bankingController);
  app.use("/pools", poolingController);

  return app;
}
