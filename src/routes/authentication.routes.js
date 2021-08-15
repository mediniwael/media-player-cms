const express = require('express')
const router = express.Router()
const User = require('../models/user.model');
const passport = require('passport')
const genPassword = require('../../lib/passwordUtils.js').genPassword;
const dbConn = require('../../config/db.config');
const { isSiteAdmin, isClientAdmin, isAdmin } = require('./authMiddleware');

/**
 * -------------- POST ROUTES ----------------
 */

// TODO 
router.post('/login', passport.authenticate('local', { failureRedirect: '/login-failure', successRedirect: '/login-success' }));

// TODO
router.post('/register', (req, res, next) => {
    const saltHash = genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.username,
        password: hash,
        salt: salt,
        //Client_idClient: clientId,
        admin: 2
    });
    if(req.body.clientId)
        newUser.Client_idClient = req.body.clientId

    User.create(newUser, function(err, user) {
        if (!err)
        console.log(user);
    })

    res.redirect('/login');
});


/**
* -------------- GET ROUTES ----------------
*/

router.get('/', (req, res, next) => {
    res.send('<h1>Home</h1><p>Please <a href="/register">register</a></p>');
});

// When you visit http://localhost:3000/login, you will see "Login Page"

router.get('/login', (req, res, next) => {

    const form = '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);

});

// When you visit http://localhost:3000/register, you will see "Register Page"
router.get('/register', (req, res, next) => {

    const form = '<h1>Register Page</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br>Enter client id:<br><input type="number" name="clientId">\
                    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);

});

/**
 * Lookup how to authenticate users on routes with Local Strategy
 * Google Search: "How to use Express Passport Local Strategy"
 * 
 * Also, look up what behaviour express session has without a maxage set
 */
router.get('/protected-route', (req, res, next) => {
    //console.log(req.isAuthenticated());
    // This is how you check if a user is authenticated and protect a route.  You could turn this into a custom middleware to make it less redundant
    if (req.isAuthenticated()) {
        res.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>');
    } else {
        res.send('<h1>You are not authenticated</h1><p><a href="/login">Login</a></p>');
    }
});

router.get('/isSiteAdmin',isSiteAdmin, (req, res, next) => {
    res.send('<h1>You are a Site Admin</h1><p><a href="/logout">Logout and reload</a></p>');
});

router.get('/isClientAdmin',isClientAdmin, (req, res, next) => {
    res.send('<h1>You are a Client Admin</h1><p><a href="/logout">Logout and reload</a></p>');
});

// Visiting this route logs the user out
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/protected-route');
});

router.get('/login-success', (req, res, next) => {
    console.log(req.isAuthenticated());
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});

router.get('/login-failure', (req, res, next) => {
    console.log(req.isAuthenticated());
    res.send('You entered the wrong password.');
});

module.exports = router