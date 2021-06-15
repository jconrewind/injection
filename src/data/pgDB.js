const { Pool } = require('pg');
const { db: { pg: { settings } } } = require('../ioc');

class PGdatabase {
  constructor() {
    this.conn = null;
    this.client = null;
  }

  create() {
    this.conn = new Pool(settings);
  }

  async connection() {
    this.client = await this.conn.connect();
  }

  close() {
    this.client.release();
  }

  queryOne() {
    console.log('query one');
  }

  queryAll(table, callback) {
    this.client.query(`SELECT * FROM ${table}.${table}`, (err, result) => {
      if (err) {
        return console.error('Error executing query', err.stack);
      }
      callback(result.rows);
    });
  }
}

module.exports = new PGdatabase();
