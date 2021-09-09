const express = require('express')
const router = express.Router()
const playlist_has_mediaController = require('../controllers/playlist_has_media.controller');
const { isSiteAdmin, isAuth } = require('../middleware/authMiddleware');

router.get('/', isSiteAdmin, playlist_has_mediaController.findAll);

router.post('/', isAuth, playlist_has_mediaController.create);

router.delete('/:idPlaylist/:idMedia', isAuth, playlist_has_mediaController.delete);

module.exports = router