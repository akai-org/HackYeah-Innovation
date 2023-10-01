import {RequestHandler} from "express";
import {pool} from "../../main";
import {RowDataPacket} from "mysql2";

const SQL = `\
SELECT
  university.university_id AS id,
  university.name, major.name AS major,
  university_type.name AS type
FROM university_major
LEFT JOIN university ON university_pk = university.university_id
LEFT JOIN major ON major_pk = major.major_id
LEFT JOIN university_type ON type_pk = university_type_id;\
`;

interface UniResult {
  id: number;
  name: string;
  major: string;
  type: string;
}

export const uni_get: RequestHandler = async (req, res) => {
  try {
    const con = await pool.getConnection();

    const response = (await con.query<RowDataPacket[]>(SQL))[0] as UniResult[];

    res.json(response);
  
    con.release();
  } catch (err) {
    console.error(err);

    res.status(500).end();
  }
 
}
