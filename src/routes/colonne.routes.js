const express = require('express')
const router = express.Router()
const colonneController = require('../controllers/colonne.controller');
const { isSiteAdmin, isAuth } = require('../middleware/authMiddleware');

router.get('/', isSiteAdmin, colonneController.findAll);

router.post('/', isAuth, colonneController.create);

router.put('/:id/:newid', isAuth, colonneController.update);

router.delete('/:idMaq/:nbr', isAuth, colonneController.delete);

module.exports = router