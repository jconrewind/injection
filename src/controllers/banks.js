const logger = require('../utils/loggerConsole');
const serviceBanks = require('../services/bank')({ logger });
const fetcher = require('../utils/fetcher');

exports.all = async () => {
  try {
    // services DI
    const cash = serviceBanks.getCash();
    serviceBanks.total(cash);

    // utiles DI
    await fetcher.get('http://localhost:20026/v1/json');
    // fetcher.post(
    //   'http://localhost:20026/v1/post',
    //   JSON.stringify({ status: true }),
    // );
  } catch (err) {
    console.log(err);
  }
};
