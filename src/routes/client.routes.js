const express = require('express')
const router = express.Router()
const clientController = require('../controllers/client.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, isAuth, isClient } = require('../middleware/authMiddleware');

// Retrieve all client
router.get('/', isAuth, clientController.findAll);

// Create a new client
router.post('/', clientController.create);

// Retrieve a single client with id
router.get('/:id', isAuth, isClient, clientController.findById);

// Update a client with id
router.put('/:id', isAdmin, isClient, clientController.update);

// Delete a client with id
router.delete('/:id', isAdmin, isClient, clientController.delete);

module.exports = router