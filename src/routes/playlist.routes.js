const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlist.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, injectClientId, isAuth, isClient } = require('./authMiddleware');

// Retrieve all playlist
router.get('/', isSiteAdmin, playlistController.findAll);

// Create a new playlist
router.post('/', isAuth, injectClientId, playlistController.create);

// Retrieve a single playlist with id
router.get('/:id', isAuth, isClient, playlistController.findById);

router.get('/detail/:id', isAuth, isClient, playlistController.findByIdDetails);

// Update a playlist with id
router.put('/:id', isAuth, isClient, playlistController.update);

// Delete a playlist with id
router.delete('/:id', isAuth, isClient, playlistController.delete);

//get by Client id
router.get('/cl/', isAuth, playlistController.findByClientId);

module.exports = router