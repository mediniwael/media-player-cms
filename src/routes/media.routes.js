const express = require('express')
const router = express.Router()
const mediaController = require('../controllers/media.controller');

// Retrieve all media
router.get('/', mediaController.findAll);

// Create a new media
router.post('/', mediaController.create);

// Retrieve a single media with id
router.get('/:id', mediaController.findById);

// Update a media with id
router.put('/:id', mediaController.update);

// Delete a media with id
router.delete('/:id', mediaController.delete);

//link media to maquette
router.post('/add/:id/:maqId/:colNbr', mediaController.addToMaquette)

module.exports = router