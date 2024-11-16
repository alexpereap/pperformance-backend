// src/index.ts
import express, { Express } from "express";
import dotenv from "dotenv";
import loader = require("./loaders");
import http from "http";

dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async () => {
  const app: Express = express();
  await loader.default(app);

  const httpServer = http.createServer(app);
  const server = httpServer.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
};

startServer();
