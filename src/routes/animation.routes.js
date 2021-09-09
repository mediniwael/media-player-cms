const express = require('express')
const router = express.Router()
const animationController = require('../controllers/animation.controller');
const { isSiteAdmin, isAuth } = require('../middleware/authMiddleware');

router.get('/media/id', animationController.findwithMediaId);
router.get('/', animationController.findAll);
router.get('/:id', isAuth, animationController.findById);

router.post('/', isSiteAdmin, animationController.create);

router.put('/:id', isSiteAdmin, animationController.update);

router.delete('/:id', isSiteAdmin, animationController.delete);

module.exports = router