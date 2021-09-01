const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, isAuth, isClient, isRan } = require('../middleware/authMiddleware');

// Retrieve all user
//router.get('/', isSiteAdmin, userController.findAll);
router.get('/', isSiteAdmin, userController.findAll);

// Create a new user
router.post('/', isAdmin, userController.create);

// Retrieve a single user with id
router.get('/:id', isAdmin, isClient, userController.findById);

// Update a user with id
router.put('/:id', isAdmin, isClient, userController.update);
// Update a user with id
router.put('/admin/:id', isAdmin, isClient, userController.updateAdmin);
// Update a user with id
router.put('/client/:id', isAdmin, isClient, userController.updateClient);
router.put('/client/setNull/:id', isAdmin, isClient, userController.setClientNull);

// Delete a user with id
router.delete('/:id', isSiteAdmin, userController.delete);

//get by Client id
router.get('/cl/', isAuth, userController.findByClientId);

//get by Client id
router.get('/cl/un/', isClientAdmin, userController.findByClientIdAndUnaffected);

module.exports = router