const express = require('express')
const router = express.Router()
const passport = require('passport')
const { isSiteAdmin, isClientAdmin, isAdmin, isAuthed } = require('../middleware/authMiddleware');
const { logBody } = require('../middleware/midlleware')
const authenticationController = require('../controllers/authentication.controller');

router.post('/login', logBody, passport.authenticate('local'), (req, res) => {
    res.end()
});
router.post('/register', logBody, authenticationController.register);
router.get('/register', authenticationController.registrationForm);
router.get('/login', authenticationController.loginForm);
router.get('/protected-route', isAdmin, (req, res, next) => {
    if (req.isAuthenticated()) {
        res.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>');
    } else {
        res.send('<h1>You are not authenticated</h1><p><a href="/login">Login</a></p>');
    }
});
router.get('/isAuth', isAuthed)
router.get('/isSiteAdmin', isSiteAdmin, (req, res, next) => {
    res.send('<h1>You are a Site Admin</h1><p><a href="/logout">Logout and reload</a></p>');
});
router.get('/isClientAdmin', isClientAdmin, (req, res, next) => {
    res.send('<h1>You are a Client Admin</h1><p><a href="/logout">Logout and reload</a></p>');
});
router.get('/logout', authenticationController.logout);

module.exports = router