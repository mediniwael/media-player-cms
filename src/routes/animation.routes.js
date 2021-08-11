const express = require('express')
const router = express.Router()
const animationController = require('../controllers/animation.controller');

// Retrieve all animation
router.get('/', animationController.findAll);

// Create a new animation
router.post('/', animationController.create);

// Retrieve a single animation with id
router.get('/:id', animationController.findById);

// Update a animation with id
router.put('/:id', animationController.update);

// Delete a animation with id
router.delete('/:id', animationController.delete);

module.exports = router