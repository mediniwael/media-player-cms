const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlist.controller');

// Retrieve all playlist
router.get('/', playlistController.findAll);

// Create a new playlist
router.post('/', playlistController.create);

// Retrieve a single playlist with id
router.get('/:id', playlistController.findById);

router.get('/detail/:id', playlistController.findByIdDetails);

// Update a playlist with id
router.put('/:id', playlistController.update);

// Delete a playlist with id
router.delete('/:id', playlistController.delete);

module.exports = router