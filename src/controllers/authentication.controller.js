'use strict';

const User = require('../models/user.model');
const genPassword = require('../../lib/passwordUtils.js').genPassword;
const clientController = require('../controllers/client.controller');


exports.register = function (req, res, next) {

    const saltHash = genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        salt: salt,
        admin: 9,
    });
    if (req.body.clientName) {
        newUser.admin = 1
    }

    if (req.body.clientName) {
        req.newuser = newUser
        clientController.createFromName(req, res)
    } else {
        User.create(newUser, function (err, user) {
            if (err)
                res.json({ success: false })
            res.json({ success: true })
        })
    }

}

exports.registrationForm = function (req, res, next) {
    const form = '<h1>Register Page</h1><form method="post" action="register">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:s<br><input type="password" name="password">\
    <br>Enter client id:<br><input type="number" name="clientId">\
    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);
}

exports.loginForm = function (req, res, next) {
    const form = '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);
}

exports.logout = function (req, res, next) {
    req.logout();
    res.send(" ")
}
