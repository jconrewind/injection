const log4js = require('log4js');
const path = require('path');

const logger = log4js.getLogger();
const errLogger = log4js.getLogger('error');

log4js.configure({
  appenders: {
    console: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%[[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %] %m',
      },
    },
    debug: {
      type: 'dateFile',
      filename: path.join(process.cwd(), 'logs/debug.log'),
      pattern: '.yyyyMMdd',
    },
    server: {
      type: 'dateFile',
      filename: path.join(process.cwd(), 'logs/server.log'),
      pattern: '.yyyyMMdd',
    },
    error: {
      type: 'dateFile',
      filename: path.join(process.cwd(), 'logs/server_error.log'),
      pattern: '.yyyyMMdd',
    },
  },
  categories: {
    default: { appenders: ['server', 'console', 'debug'], level: 'info' },
    error: { appenders: ['error', 'console', 'debug'], level: 'error' },
  },
});

module.exports = {
  logInfo: (type, ...args) => {
    const msg = `${type}: ${args
      .map((item) => JSON.stringify(item).replace(/"/g, ''))
      .join(' ')}`;
    logger.info(msg);
    return msg;
  },
  logError: (type, ...args) => {
    const msg = `${type}: ${args
      .map((item) => JSON.stringify(item).replace(/"/g, ''))
      .join(' ')}`;
    errLogger.error(msg);
  },
};
