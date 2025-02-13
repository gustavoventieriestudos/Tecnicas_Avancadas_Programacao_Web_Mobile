import "dotenv/config";
import { server } from "./server/server.js";

server.listen(process.env.PORT, () => {
  console.log(`App rodando na porta ${process.env.PORT}`);
});
