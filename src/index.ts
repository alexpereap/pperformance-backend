// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import loader = require('./loaders');
const http = require('http');

dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async() => {
  const app: Express = express();
  await loader.default(app);

  const httpServer = http.createServer(app);
  const server = httpServer.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });

}

/* app.get("/", (req: Request, res: Response) => {
  res.send("Express hola + TypeScript PEREA PERFORMANCE");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});*/

startServer();