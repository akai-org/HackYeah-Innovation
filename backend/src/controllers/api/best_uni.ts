import {RequestHandler} from "express";
import {pool} from "../../main";
import {RowDataPacket} from 'mysql2';

const scoring: Record<string, [number, number, number, number]> = {
  /* [Politechnika, Uni, Eko, Traktor] */
  a: [2, 1, 0, -1],
  b: [1, 2, 0, -1],
  c: [0, 0, 2, 1],
  d: [-1, -1, 1, 2]
}

type Body = Array<'a'|'b'|'c'|'d'>;

export const bestUni_post: RequestHandler<{}, {}, Body> = async (req, res) => {
  try {
    const con = await pool.getConnection();
    console.log(req.body);
    let score_tmp = [0, 0, 0, 0];

    for (let answer of req.body) {
      // console.log()
      const cur = scoring[answer];

      score_tmp = score_tmp.map((item, index) => item += cur[index]);
    }

    // console.log(score_tmp);

    let score = score_tmp.map(item => Math.round((item / (2 * req.body.length)) * 100));

    let top = score[0];
    let index = 0;

    for (let i = 1; i < 4; i++) {
      if (top < score[i]) {
        top = score[i];
        index = i;
      }
    }

    // TODO kiedys moze
    const result = (await con.query("SELECT * FROM university LEFT JOIN score ON university.score_pk = score_id WHERE score.a > 50;"))[0];

    /**
     * Pytania
     * a - Politechniki
     * b - Uni
     * c - Ekonomiki
     * d - Rolnicze
     */

    res.json(result);
  } catch (err) {
    console.error(err);

    res.sendStatus(500);
  }
}