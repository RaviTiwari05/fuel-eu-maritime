import 'dotenv/config';
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    // Use process.env directly (works reliably with dotenv)
    url: process.env.DATABASE_URL!,
  },
});
