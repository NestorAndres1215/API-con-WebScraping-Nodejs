const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');

router.get('/', noticiaController.obtenerNoticias);

module.exports = router;
