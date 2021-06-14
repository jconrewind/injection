const dotenv = require('dotenv');

dotenv.config();

const data = {
  APP_NAME: process.env.APP_NAME,
  APP_PORT: process.env.APP_PORT,
  SERVER_SOCKET_PORT: process.env.SERVER_SOCKET_PORT,
  ENVIRONMENT: process.env.ENVIRONMENT,
  MEDIA_PATH: process.env.MEDIA_PATH || process.cwd(),
  NODE_ENV: process.env.NODE_ENV,
};

module.exports = Object.freeze(data);
