const express = require('express')
const router = express.Router()
const affichageController = require('../controllers/affichage.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, injectClientId, isAuth, isClient } = require('../middleware/authMiddleware');


router.get('/', isSiteAdmin, affichageController.findAll);


router.post('/', isAuth, injectClientId, affichageController.create);


router.get('/:id', isAuth, isClient, affichageController.findById);


router.put('/:id', isAuth, isClient, injectClientId, affichageController.update);


router.delete('/:id', isAuth, isClient, affichageController.delete);


router.get('/client/id', isAuth, affichageController.findByClientId);

router.get('/detail/:lien', affichageController.findDetailByLien);

module.exports = router