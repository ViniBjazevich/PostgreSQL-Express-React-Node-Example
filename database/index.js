const { Pool, Client } = require("pg");

const credentials = {
  user: "vinibjazevich",
  host: "localhost",
  database: "pernfullstackdb",
  password: "",
  port: 5432,
};

const pool = new Pool(credentials);

// What is the point of client??
// const client = new Client(credentials);

module.exports = pool;