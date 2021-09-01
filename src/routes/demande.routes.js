const express = require('express')
const router = express.Router()
const demandeController = require('../controllers/demande.controller');
const { isAuth } = require('../middleware/authMiddleware');


// Create a new user
router.post('/', isAuth, demandeController.create);

router.get('/demande/:id', isAuth, demandeController.findById);

router.get('/:id', isAuth, demandeController.findByClientId);

router.get('/user/id/:id', isAuth, demandeController.findByUserId);

// Delete a user with id
router.delete('/:id', isAuth, demandeController.delete);

module.exports = router