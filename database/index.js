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
const client = new Client(credentials);

// async function poolDemo() {
//   const pool = new Pool(credentials);
//   const now = await pool.query("SELECT * FROM demo");
//   console.log(now.rows);
//   await pool.end();

//   return now;
// }

// poolDemo();

module.exports = pool;

// CREATE TABLE demo (
//         user_id serial PRIMARY KEY,
//         username VARCHAR ( 50 ) UNIQUE NOT NULL,
//         password VARCHAR ( 50 ) NOT NULL,
//         email VARCHAR ( 255 ) UNIQUE NOT NULL,
//         created_on TIMESTAMP NOT NULL,
//   last_login TIMESTAMP
// );

// INSERT INTO demo (username, password, email, created_on, last_login)
//     VALUES ('ViniB', 'boltman', 'vinibjazevich97@gmail.com', current_timestamp, current_timestamp);

// INSERT INTO demo (todo)
//   VALUES ('ViniB');