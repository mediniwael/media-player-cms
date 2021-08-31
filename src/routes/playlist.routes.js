const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlist.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, injectClientId, injectClientIdAsParam, isAuth, isClient } = require('../middleware/authMiddleware');

// Retrieve all playlist
router.get('/', isSiteAdmin, playlistController.findAll);

// Create a new playlist
router.post('/', isAuth, injectClientId, playlistController.create);

// Retrieve a single playlist with id
router.get('/:id', isAuth, isClient, playlistController.findById);

router.get('/detail/:id', isAuth, isClient, playlistController.findByIdDetails);

// Update a playlist with id
router.put('/:id', isAuth, isClient, injectClientId, playlistController.update);


// Delete a playlist with id
router.delete('/:id', isAuth, isClient, playlistController.delete);

//get by Client id
router.get('/client/pl', isAuth, playlistController.findByClientId);

//get by Client id
router.get('/client/detail/:id', isAuth, injectClientIdAsParam, playlistController.findDetailsById);

module.exports = router