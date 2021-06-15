const PGdatabase = require('../data/pgDB');
const { retrieveAll } = require('../data/dao')({ client: PGdatabase });

const helper = require('../helper/logsConfiguration');

const logInfo = (...args) => helper.logInfo('SERVER', ...args);
const logError = (...args) => helper.logError('SERVER', ...args);

exports.all = async (_, res) => {
  logInfo('Request /users - message sent');
  try {
    retrieveAll('users', (data) => res.json(data));
  } catch (err) {
    logError('Error', err);
  }
};
