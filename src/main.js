const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const router = require('./router');
const helper = require('./helper/logsConfiguration');

const logInfo = (...args) => helper.logInfo('SERVER', ...args);

const { APP_PORT, MEDIA_PATH } = require('./config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Routes handlers
app.use('/', router);

app.listen(APP_PORT, () => {
  logInfo(`Start... port: ${APP_PORT} pwd:${MEDIA_PATH} pid:${process.pid}`);
});
