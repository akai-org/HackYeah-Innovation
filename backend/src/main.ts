import http from "node:http";
import path from "node:path";

import express from "express";
import OpenAI from "openai";

import {test} from "./controllers/api/test";
import {login} from "./controllers/api/login";
import {Database} from "./classes/Database";
import {answers} from "./controllers/api/answers";

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

const app = express();

app.use(express.json());

(async () => {
  await database.migrate();

  app.use(express.static(path.join(__dirname, '..', '../frontend/HackYeah-Kolobrzeg')));
  app.use(test);
  app.post('/login', login);
  app.post('/answers', answers)


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