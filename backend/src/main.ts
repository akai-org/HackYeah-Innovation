import http from "node:http";

import express from "express";
import OpenAI from "openai";

import {test} from "./controllers/api/test";
import {Database} from "./classes/Database";

const PORT = 8080;

const database = new Database({
  host: '127.0.0.1',
  user: 'root',
  password: '123',
  database: 'main',
  waitForConnections: true,
  multipleStatements: true,
  connectionLimit: 10,
  enableKeepAlive: true
});

(async () => {
  await database.migrate();

  const app = express();

  app.use(test);

  http.createServer(app).listen(PORT, () => {
    console.log(`Server lisening on port ${PORT}`);
  });
})();

export const pool = database.pool;

export const openai = new OpenAI({
  // Don't store secrets directly in the source code they said
  // It's dengerous they said
  // Brother in Christ, it's save here, trust me
  apiKey: "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"
});