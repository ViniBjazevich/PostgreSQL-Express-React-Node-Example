const { Pool, Client } = require("pg");

const credentials = {
  user: "vinibjazevich",
  host: "localhost",
  database: "pernfullstackdb",
  password: "",
  port: 5432,
};

// Connect with a connection pool.
const pool = new Pool(credentials);

// async function poolDemo() {
//   const pool = new Pool(credentials);
//   const now = await pool.query("SELECT * FROM demo");
//   console.log(now.rows);
//   await pool.end();

//   return now;
// }

// poolDemo();

module.exports = pool;