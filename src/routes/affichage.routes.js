const express = require('express')
const router = express.Router()
const affichageController = require('../controllers/affichage.controller');

// Retrieve all affichage
router.get('/', affichageController.findAll);

// Create a new affichage
router.post('/', affichageController.create);

// Retrieve a single affichage with id
router.get('/:id', affichageController.findById);

// Update a affichage with id
router.put('/:id', affichageController.update);

// Delete a affichage with id
router.delete('/:id', affichageController.delete);

module.exports = router