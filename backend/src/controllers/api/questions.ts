import {RequestHandler} from "express";
import {pool} from "../../main";
import {RowDataPacket} from "mysql2";

interface QuestionResult {
  question_id: number;
  content: string;
  answer_a: string;
  answer_b: string;
  answer_c: string;
  answer_d: string;
}

export const questions_get: RequestHandler = async (req, res) => {
  try {
    const con = await pool.getConnection();  

    const questions = (await con.query<RowDataPacket[]>("SELECT * FROM question;"))[0] as QuestionResult[];

    const response = questions.map(({question_id, content, answer_a, answer_b, answer_c, answer_d}) => ({
      id: question_id,
      question: content,
      answers: {
        answer_a,
        answer_b,
        answer_c,
        answer_d,
      }
    }));

    res.json(response);
  
    con.release();
  } catch (err) {
    console.error(err);

    res.status(500).end();
  }
 
}
