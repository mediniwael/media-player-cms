const express = require('express')
const router = express.Router()
const colonneController = require('../controllers/colonne.controller');

// Retrieve all colonne
router.get('/', colonneController.findAll);

// Create a new colonne
router.post('/', colonneController.create);


// Delete a colonne with id
router.delete('/:idMaq/:nbr', colonneController.delete);

module.exports = router