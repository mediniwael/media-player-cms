const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, isAuth, isClient, isRan } = require('../middleware/authMiddleware');

// Retrieve all user
//router.get('/', isSiteAdmin, userController.findAll);
router.get('/',isSiteAdmin, userController.findAll);

// Create a new user
router.post('/', isAdmin, userController.create);

// Retrieve a single user with id
router.get('/:id', isAdmin, isClient, userController.findById);

// Update a user with id
router.put('/:id', isAdmin, isClient, userController.update);

// Delete a user with id
router.delete('/:id', isAdmin, isClient, userController.delete);

//get by Client id
router.get('/cl/', isAuth, userController.findByClientId);

module.exports = router