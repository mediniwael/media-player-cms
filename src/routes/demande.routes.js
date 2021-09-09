const express = require('express')
const router = express.Router()
const demandeController = require('../controllers/demande.controller');
const { isAuth } = require('../middleware/authMiddleware');

router.get('/user/id/:id', isAuth, demandeController.findByUserId);
router.get('/demande/:id', isAuth, demandeController.findById);
router.get('/:id', isAuth, demandeController.findByClientId);

router.post('/', isAuth, demandeController.create);

router.delete('/:id', isAuth, demandeController.delete);

module.exports = router