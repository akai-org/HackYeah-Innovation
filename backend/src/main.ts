import 'dotenv/config';
import http from "node:http";
import path from "node:path";

import express from "express";
import bodyParser from 'body-parser';
import OpenAI from "openai";

import {test} from "./controllers/api/test";
import {login} from "./controllers/api/login";
import {questions_get} from "./controllers/api/questions";
import {uni_get} from './controllers/api/uni';
import {bestUni_post} from './controllers/api/best_uni';
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
  app.use(bodyParser.json());
  app.use(test);

  app.get('/api/questions', questions_get);
  app.get('/api/uni', uni_get);

  app.post('/api/bestUni', bestUni_post);
  app.post('/login', login);
  app.post('/answers', answers)


  http.createServer(app).listen(PORT, "0.0.0.0", () => {
    console.log(`Server lisening on port ${PORT}`);
  });
})();


export const pool = database.pool;

export const openai = new OpenAI({
  apiKey: process.env.OPENAI
});