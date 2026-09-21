import { app } from "./app.js";
import { connectDatabase } from "./config/database.js";
import { env } from "./config/env.js";

async function startServer() {
  try {
    await connectDatabase();

    const server = app.listen(env.PORT, () => {
      console.log(
        `API running on http://localhost:${env.PORT}`,
      );
    });

    function shutdown(signal: string) {
      console.log(`${signal} received. Shutting down...`);

      server.close(async (error) => {
        if (error) {
          console.error(
            "Error during shutdown:",
            error,
          );

          process.exit(1);
        }

        console.log("HTTP server closed.");

        process.exit(0);
      });
    }

    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
  } catch (error) {
    console.error("Failed to start API:", error);
    process.exit(1);
  }
}

startServer();