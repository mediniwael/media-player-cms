const express = require('express')
const router = express.Router()
const colonneController = require('../controllers/colonne.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, isAuth, isClient } = require('../middleware/authMiddleware');

// Retrieve all colonne
router.get('/', isSiteAdmin, colonneController.findAll);

// Create a new colonne
router.post('/', isAuth, colonneController.create);

// Update a colonne with playlist_id
router.put('/:id/:newid', isAuth, colonneController.update);

// Delete a colonne with id
router.delete('/:idMaq/:nbr', isAuth, colonneController.delete);

module.exports = router