// db/postgres.js

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.PG_URI,
  ssl: {
    rejectUnauthorized: false, // Required for services like Render or Railway
  },
});

const connectPostgres = async () => {
  try {
    await pool.connect();
    console.log('✅ PostgreSQL Connected');
  } catch (err) {
    console.error('❌ PostgreSQL Connection Error:', err.message);
  }
};

module.exports = {
  connectPostgres,
  pool, // export pool to run queries elsewhere
};
