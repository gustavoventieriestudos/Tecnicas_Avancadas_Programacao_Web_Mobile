import express from "express";
import { router } from "./routes/routes.js";
const server = express();


server.use(express.json());

server.use(router);

export { server };
