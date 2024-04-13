const pg = require("pg");
const { Pool } = pg;

let localPoolConfig = {
    user: "root",
    password: "password",
    host: "localhost",
    port: 5433,
    database: "p_database",
};

const poolConfig = process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }
    : localPoolConfig;

const pool = new Pool(poolConfig);
module.exports = pool;