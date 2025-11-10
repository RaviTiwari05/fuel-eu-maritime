import { createServer } from "./infrastructure/server/expressServer";

const PORT = process.env.PORT || 5000;

async function start() {
  const app = createServer();
  app.listen(PORT, () => {
    console.log("⚡ Backend running on port", PORT);
  });
}

start();
