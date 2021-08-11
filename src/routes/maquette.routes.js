const express = require('express')
const router = express.Router()
const maquetteController = require('../controllers/maquette.controller');

// Retrieve all maquette
router.get('/', maquetteController.findAll);

// Create a new maquette
router.post('/', maquetteController.create);

// Retrieve a single maquette with id
router.get('/:id', maquetteController.findById);

// Update a maquette with id
router.put('/:id', maquetteController.update);

// Delete a maquette with id
router.delete('/:id', maquetteController.delete);

module.exports = router