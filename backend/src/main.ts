import http from "node:http";
import express from "express";

const PORT = 8080;

const app = express();

app.get('/', (_, res) => {
  res.send("Hello World!");
});

http.createServer(app).listen(PORT, () => {
  console.log(`Server lisening on port ${PORT}`);
});
