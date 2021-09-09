const express = require('express')
const router = express.Router()
const clientController = require('../controllers/client.controller');
const { isAdmin, isAuth, isClient } = require('../middleware/authMiddleware');

router.get('/', isAuth, clientController.findAll);
router.get('/:id', isAuth, isClient, clientController.findById);

router.post('/', clientController.create);

router.put('/:id', isAdmin, isClient, clientController.update);

router.delete('/:id', isAdmin, isClient, clientController.delete);

module.exports = router