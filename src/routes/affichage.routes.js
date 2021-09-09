const express = require('express')
const router = express.Router()
const affichageController = require('../controllers/affichage.controller');
const { isSiteAdmin, injectClientId, isAuth, isClient } = require('../middleware/authMiddleware');

router.get('/client/id', isAuth, affichageController.findByClientId);
router.get('/', isSiteAdmin, affichageController.findAll);
router.get('/detail/:lien', affichageController.findDetailByLien);
router.get('/:id', isAuth, isClient, affichageController.findById);

router.post('/', isAuth, injectClientId, affichageController.create);

router.put('/:id', isAuth, isClient, injectClientId, affichageController.update);

router.delete('/:id', isAuth, isClient, affichageController.delete);

module.exports = router