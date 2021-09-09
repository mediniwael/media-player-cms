const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlist.controller');
const { isSiteAdmin, injectClientId, injectClientIdAsParam, isAuth, isClient } = require('../middleware/authMiddleware');

router.get('/client/pl', isAuth, playlistController.findByClientId);
router.get('/', isSiteAdmin, playlistController.findAll);
router.get('/client/detail/:id', isAuth, injectClientIdAsParam, playlistController.findDetailsById);
router.get('/detail/:id', isAuth, isClient, playlistController.findByIdDetails);
router.get('/:id', isAuth, isClient, playlistController.findById);

router.put('/:id', isAuth, isClient, injectClientId, playlistController.update);

router.delete('/:id', isAuth, isClient, playlistController.delete);

router.post('/', isAuth, injectClientId, playlistController.create);



module.exports = router