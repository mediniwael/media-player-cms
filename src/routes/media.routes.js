const express = require('express')
const router = express.Router()
const mediaController = require('../controllers/media.controller');
const { injectClientId, isAuth, isClient, isSiteAdmin } = require('../middleware/authMiddleware');
const { upload, mediaDelete } = require('../middleware/midlleware');

router.get('/client/c/', isAuth, mediaController.findByClientId);
router.get('/', isSiteAdmin, mediaController.findAll);
router.get('/animation/find/:id', isAuth, isClient, mediaController.findByAnimId);
router.get('/:id', isAuth, isClient, mediaController.findById);

router.post('/upload', isAuth, injectClientId, upload, mediaController.create);
router.post('/', isAuth, injectClientId, mediaController.create);
router.post('/add/:id/:maqId/:colNbr/:type', isAuth, injectClientId, mediaController.addToMaquette);

router.put('/:id', isAuth, isClient, injectClientId, mediaController.update);

router.delete('/:id', isAuth, isClient, mediaDelete, mediaController.delete);

module.exports = router