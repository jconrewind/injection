const dao = require('../data/dao');

const helper = require('../helper/logsConfiguration');

const logInfo = (...args) => helper.logInfo('SERVER', ...args);
const logError = (...args) => helper.logError('SERVER', ...args);

const settings = {
  user: 'ju',
  host: 'localhost',
  database: 'first',
  password: 'ksio9',
  port: 5432,
};

exports.all = async (_, res) => {
  try {
    // dao DI
    const pool = dao.createPool(settings);
    dao.retrieveAll(pool, 'users', (data) => res.json(data));
    logInfo('Request /users - message sent');
  } catch (err) {
    logError('Error', err);
  }
};
