const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');
const { isSiteAdmin, isClientAdmin, isAdmin, isAuth, isClient } = require('../middleware/authMiddleware');

router.get('/cl/un/', isClientAdmin, userController.findByClientIdAndUnaffected);
router.get('/cl/', isAuth, userController.findByClientId);
router.get('/', isSiteAdmin, userController.findAll);
router.get('/:id', isAdmin, isClient, userController.findById);

router.put('/client/setNull/:id', isAdmin, isClient, userController.setClientNull);
router.put('/admin/:id', isAdmin, isClient, userController.updateAdmin);
router.put('/client/:id', isAdmin, isClient, userController.updateClient);
router.put('/:id', isAdmin, isClient, userController.update);

router.delete('/:id', isSiteAdmin, userController.delete);

router.post('/', isAdmin, userController.create);

module.exports = router