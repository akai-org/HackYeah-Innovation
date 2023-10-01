import fs from "node:fs";
import path from "node:path";

import mysql2 from "mysql2/promise";

const MIGRATIONS_DIR = 'db/migrations';

export class Database {
  public pool: mysql2.Pool;
  private options: mysql2.PoolOptions;
  constructor(opitons: mysql2.PoolOptions) {
    this.options = opitons;
    this.pool = mysql2.createPool(opitons);
  }

  async migrate() {
    const pool = mysql2.createPool({
      ...this.options,
      database: undefined,
    });
    const dir = path.resolve(__dirname, '../../', MIGRATIONS_DIR);
    const con = await this.pool.getConnection();

    const paths = fs.readdirSync(dir).map(file => path.join(dir, file)).sort((a, b) => {
      // Extract the numeric part of the file name and convert it to numbers
      const numA = parseInt(a.match(/\d+/)![0]);
      const numB = parseInt(b.match(/\d+/)![0]);

      // Compare the numeric parts
      if (numA < numB) {
        return -1;
      } else if (numA > numB) {
        return 1;
      } else {
        return 0;
      }
    });

    console.log(paths);

    for (let path of paths) {
      const file = fs.readFileSync(path, 'utf-8');
      
      await con.query(file);
    }
  }
}