import { Router } from "express";
import {pool} from "../../main";

export const test = Router().get('/test', async (_, res) => {
  const con = await pool.getConnection();

  console.log(await con.query("SELECT * FROM people"));
  res.send("dupa");
});