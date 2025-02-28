import "dotenv/config";
import { server } from "./server/server.js";
import { startDatabase } from "./server/database/database.js";

server.listen(process.env.PORT, async () => {
  console.log(`Server running on ${process.env.PORT}`);
  startDatabase();
});
