const express = require('express');
const router = express.Router();

//importando el controlador
const mainController = require('../controllers/mainController');
const loggerMiddleware = require('../middlewares/loggerMiddleware');

router.get('/', loggerMiddleware, mainController.home);
router.get('/status', loggerMiddleware, mainController.status);

module.exports = router;
