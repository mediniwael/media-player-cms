const express = require('express')
const router = express.Router()
const playlist_has_mediaController = require('../controllers/playlist_has_media.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, isAuth } = require('../middleware/authMiddleware');

// Retrieve all playlist_has_media
router.get('/', isSiteAdmin, playlist_has_mediaController.findAll);

// Create a new playlist_has_media
router.post('/', isAuth, playlist_has_mediaController.create);


// Delete a playlist_has_media with id
router.delete('/:idPlaylist/:idMedia', isAuth, playlist_has_mediaController.delete);

module.exports = router