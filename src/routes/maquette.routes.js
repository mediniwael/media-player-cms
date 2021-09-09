const express = require('express')
const router = express.Router()
const maquetteController = require('../controllers/maquette.controller');
const { isSiteAdmin, injectClientId, isAuth, isClient } = require('../middleware/authMiddleware');
const { logBody } = require('../middleware/midlleware')

router.get('/client/id', isAuth, maquetteController.findByClientId);
router.get('/', isSiteAdmin, maquetteController.findAll);
router.get('/find/detail/:id', isAuth, isClient, maquetteController.findDetailById);
router.get('/:id', isAuth, isClient, maquetteController.findById);

router.post('/', injectClientId, logBody, maquetteController.create);

router.put('/:id', isAuth, isClient, injectClientId, maquetteController.update);

router.delete('/:id', isAuth, isClient, maquetteController.delete);



module.exports = router