const express = require('express')
const router = express.Router()
const mediaController = require('../controllers/media.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, injectClientId, isAuth, isClient } = require('./authMiddleware');

// Retrieve all media
router.get('/', isSiteAdmin, mediaController.findAll);

// Create a new media
router.post('/', isAuth, injectClientId, mediaController.create);

// Retrieve a single media with id
router.get('/:id', isAuth, isClient, mediaController.findById);

// Update a media with id
router.put('/:id', isAuth, isClient, mediaController.update);

// Delete a media with id
router.delete('/:id', isAuth, isClient, mediaController.delete);

//link media to maquette
router.post('/add/:id/:maqId/:colNbr', isAuth, mediaController.addToMaquette)

//get by Client id
router.get('/cl/', isAuth, mediaController.findByClientId);

module.exports = router