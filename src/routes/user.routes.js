const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');
const { isSiteAdmin, isClientAdmin, isAdmin } = require('./authMiddleware');

// Retrieve all user
router.get('/', isAdmin, userController.findAll);

// Create a new user
router.post('/', isAdmin, userController.create);

// Retrieve a single user with id
router.get('/:id', isAdmin, userController.findById);

// Update a user with id
router.put('/:id', isAdmin, userController.update);

// Delete a user with id
router.delete('/:id', isAdmin, userController.delete);

module.exports = router