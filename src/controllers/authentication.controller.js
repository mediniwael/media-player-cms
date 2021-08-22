'use strict';

const User = require('../models/user.model');
const genPassword = require('../../lib/passwordUtils.js').genPassword;


exports.register = function (req, res, next) {
    const saltHash = genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        salt: salt,
        admin: req.body.admin,
    });
    if (req.body.clientId)
        newUser.Client_idClient = req.body.clientId
    User.create(newUser, function (err, user) {
        if (err)
            res.json({ success: false })
    })

    res.status(201).json({ success: true })
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
}
