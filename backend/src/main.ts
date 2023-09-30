import http from "node:http";
import express from "express"
import path from "path";
import bcrypt from "bcryptjs";


import {test} from "./controllers/api/test";
import {login} from "./controllers/api/login";

const PORT = 8080;

const app = express();
app.use(express.static(path.join(__dirname, '..', '../frontend/HackYeah-Kolobrzeg')));

app.use(express.json());

app.post('/login', login);


app.use(test);


http.createServer(app).listen(PORT, () => {
  console.log(`Server lisening on port ${PORT}`);
});
