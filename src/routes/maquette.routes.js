const express = require('express')
const router = express.Router()
const maquetteController = require('../controllers/maquette.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, injectClientId, isAuth, isClient } = require('../middleware/authMiddleware');
const { logBody } = require('../middleware/midlleware')

// Retrieve all maquette
router.get('/', isSiteAdmin, maquetteController.findAll);

// Create a new maquette
router.post('/', injectClientId,logBody, maquetteController.create);

// Create a new maquette with columns
//router.post('/create/m', injectClientId,logBody, maquetteController.createFull);

// Retrieve a single maquette with id
router.get('/:id', isAuth, isClient, maquetteController.findById);


router.get('/find/detail/:id', isAuth, isClient, maquetteController.findDetailById);

// Update a maquette with id
router.put('/:id', isAuth, isClient, injectClientId, maquetteController.update);

// Delete a maquette with id
router.delete('/:id', isAuth, isClient, maquetteController.delete);

//get by Client id
router.get('/client/id', isAuth, maquetteController.findByClientId);

module.exports = router