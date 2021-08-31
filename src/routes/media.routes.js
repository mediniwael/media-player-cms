const express = require('express')
const router = express.Router()
const mediaController = require('../controllers/media.controller');
const { injectClientId, isAuth, isClient } = require('../middleware/authMiddleware');
const { upload, mediaDelete } = require('../middleware/midlleware');


// Retrieve all media
//router.get('/', isSiteAdmin, mediaController.findAll);

// Create a new media
router.post('/', isAuth, injectClientId, mediaController.create);

// Retrieve a single media with id
router.get('/:id', isAuth, isClient, mediaController.findById);

// Retrieve a single media with animation id
router.get('/animation/find/:id', isAuth, isClient, mediaController.findByAnimId);

// Update a media with id
router.put('/:id', isAuth, isClient, injectClientId, mediaController.update);

// Delete a media with id
router.delete('/:id', isAuth, isClient, mediaDelete, mediaController.delete);

//link media to maquette
router.post('/add/:id/:maqId/:colNbr/:type', isAuth, injectClientId, mediaController.addToMaquette)

//get by Client id
router.get('/client/c/', isAuth, mediaController.findByClientId);

router.post('/upload', isAuth, injectClientId, upload, mediaController.create)

module.exports = router