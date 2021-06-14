const { Pool } = require('pg');

module.exports = {
  createPool: (settings) => new Pool(settings),
  retrieveAll: async (pool, table, callback) => {
    if (!pool) {
      throw new Error('Pool not create');
    }
    const newPool = await pool.connect();
    newPool.query(`SELECT * FROM ${table}.${table}`, (err, result) => {
      if (err) {
        return console.error('Error executing query', err.stack);
      }
      callback(result.rows);
    });
    newPool.release();
  },
};

// exports.createPool = (settings) => new Pool(settings);
// exports.retrieveAll = async (pool, table, callback) => {
//   if (!pool) {
//     throw new Error('Pool not create');
//   }
//   const newPool = await pool.connect();
//   newPool.query(`SELECT * FROM ${table}.${table}`, (err, result) => {
//     if (err) {
//       return console.error('Error executing query', err.stack);
//     }
//     callback(result.rows);
//   });
//   newPool.release();
// };
