const fetch = require('node-fetch');

const helper = require('../helper/logsConfiguration');

const logInfo = (...args) => helper.logInfo('SERVER', ...args);
const logError = (...args) => helper.logError('SERVER', ...args);

const fetcher = require('../utils/fetcher')({ fetcher: fetch });
const logger = require('../utils/loggerConsole');

const { getCash, total } = require('../services/bank')({ logger });

const {
  fetch: { get: { json }, post: { post } },
} = require('../ioc');

exports.logCash = async (_, res) => {
  logInfo('Request /cash - message sent');
  try {
    const cash = getCash();
    total(cash);
    return res.json(cash);
  } catch (err) {
    logError(err);
  }
};

exports.all = async (_, res) => {
  logInfo('Request /banks - message sent');
  try {
    await fetcher({ ...json }, (data) => res.json(data));
    const newPost = { ...post, method: { ...post.method, body: JSON.stringify({ status: true }) } };
    await fetcher({ ...newPost });
  } catch (err) {
    logError(err);
  }
};
