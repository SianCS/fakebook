import dotenv from "dotenv";
import secound from "./app.js";
import app from "./app.js";
import shutdown from "./utils/shutdown.util.js";

dotenv.config();
// console.log(process.env.PORT)

// console.log(app)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

// Listen for termination signals
process.on("SIGINT", () => shutdown("SIGINT")); // Ctrl+C
process.on("SIGTERM", () => shutdown("SIGTERM")); // kill command or Docker stop
// Catch unhandled errors
process.on("uncaughtException", () => shutdown("uncaughtException"));
process.on("unhandledRejection", () => shutdown("unhandledRejection"));
