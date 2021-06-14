const express = require('express');

const router = express.Router();

const versionController = require('./controllers/version');
const userController = require('./controllers/users');
const banksController = require('./controllers/banks');

router.get('/v1/heartbeat', versionController.heartbeat);
router.get('/v1/users', userController.all);
router.get('/v1/banks', banksController.all);
router.get('/v1/json', versionController.file);
router.post('/v1/post', (req) => {
  console.log(req.body, '--> req.body');
});

module.exports = router;
