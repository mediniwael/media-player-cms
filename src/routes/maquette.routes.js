const express = require('express')
const router = express.Router()
const maquetteController = require('../controllers/maquette.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, injectClientId, isAuth, isClient } = require('./authMiddleware');

// Retrieve all maquette
router.get('/', isSiteAdmin, maquetteController.findAll);

// Create a new maquette
router.post('/', injectClientId, maquetteController.create);

// Retrieve a single maquette with id
router.get('/:id', isAuth, isClient, maquetteController.findById);

// Update a maquette with id
router.put('/:id', isAuth, isClient, maquetteController.update);

// Delete a maquette with id
router.delete('/:id', isAuth, isClient, maquetteController.delete);

//get by Client id
router.get('/cl/', isAuth, maquetteController.findByClientId);

module.exports = router