import http from "node:http";

import express from "express";
// import mysql from "mysql2/promise";

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
