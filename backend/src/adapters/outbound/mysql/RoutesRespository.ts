import prisma from "../../../infrastructure/db/prismaClient";
import { RoutesRepositoryPort } from "../../../core/ports/RoutesRepositoryPort";
import { Route } from "../../../core/domain/Route";

export class RoutesRepository implements RoutesRepositoryPort {
  async getAll(): Promise<Route[]> {
    return prisma.route.findMany();
  }

  async setBaseline(id: number): Promise<void> {
    await prisma.route.updateMany({ data: { isBaseline: false } });
    await prisma.route.update({ where: { id }, data: { isBaseline: true } });
  }

  async getBaseline(): Promise<Route | null> {
    return prisma.route.findFirst({ where: { isBaseline: true } });
  }
}
