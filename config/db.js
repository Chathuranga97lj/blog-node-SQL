import * as dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// let sql = "SELECT * FROM posts";

// pool.execute(sql, function (err, result) {
//   if (err) throw err;
//   //   console.log(result);
//   result.forEach((res) => {
//     console.log(res.title);
//   });
// });

export default pool.promise();
