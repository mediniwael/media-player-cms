const express = require('express')
const router = express.Router()
const animationController = require('../controllers/animation.controller');
const { isSiteAdmin, isClientAdmin, isAdmin , isAuth} = require('../middleware/authMiddleware');

// Retrieve all animation
router.get('/', animationController.findAll);

// Retrieve all animation
router.get('/media/id', animationController.findwithMediaId);

// Create a new animation
router.post('/', isSiteAdmin, animationController.create);

// Retrieve a single animation with id
router.get('/:id', isAuth, animationController.findById);

// Update a animation with id
router.put('/:id', isSiteAdmin, animationController.update);

// Delete a animation with id
router.delete('/:id', isSiteAdmin, animationController.delete);

module.exports = router