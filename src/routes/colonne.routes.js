const express = require('express')
const router = express.Router()
const colonneController = require('../controllers/colonne.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, isAuth } = require('./authMiddleware');

// Retrieve all colonne
router.get('/', isSiteAdmin, colonneController.findAll);

// Create a new colonne
router.post('/', isAuth, colonneController.create);

// Delete a colonne with id
router.delete('/:idMaq/:nbr', isAuth, colonneController.delete);

module.exports = router