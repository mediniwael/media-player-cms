'use strict';

const User = require('../models/user.model');

exports.findAll = function (req, res) {
    User.findAll(function (err, user) {
        if (err)
            return res.send(err);
        res.send(user);
    });
};

exports.create = function (req, res) {
    const new_user = new User(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        User.create(new_user, function (err, user) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: "User added successfully!", data: user });
        });
    }
};

exports.findById = function (req, res) {
    if (req.clientAuth === 0)
        return res.json([]);
    User.findById(req.params.id, function (err, user) {
        if (err)
            return res.send(err);
        res.json(user);
    });
};

exports.findByClientId = function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user[0].Client_idClient)
            User.findByClientId(req.user[0].Client_idClient, function (err, user) {
                if (err)
                    return res.send(err);
                res.json(user);
            });
    } else {
        return res.send(err);
    }

};

exports.findByClientIdAndUnaffected = function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user[0].Client_idClient)
            User.findByClientIdAndUnaffected(req.user[0].Client_idClient, function (err, user) {
                if (err)
                    return res.send(err);
                res.json(user);
            });
    } else {
        return res.send(err);
    }

};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        if (req.clientAuth === 0)
            return res.json({ error: false, message: 'Unauthorised update' });
        User.update(req.params.id, new User(req.body), function (err, user) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: 'User successfully updated' });
        });
    }

};

exports.updateAdmin = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        if (req.clientAuth === 0)
            return res.json({ error: false, message: 'Unauthorised update' });
        User.updateAdmin(req.params.id, new User(req.body), function (err, user) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: 'User successfully updated' });
        });
    }

};

exports.updateClient = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        if (req.clientAuth === 0)
            return res.json({ error: false, message: 'Unauthorised update' });
        User.updateClient(req.params.id, new User(req.body), function (err, user) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: 'User successfully updated' });
        });
    }

};

exports.setClientNull = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        if (req.clientAuth === 0)
            return res.json({ error: false, message: 'Unauthorised update' });
        User.setClientNull(req.params.id, function (err, user) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: 'User successfully updated' });
        });
    }

};

exports.delete = function (req, res) {
    if (req.clientAuth === 0)
        return res.json({ error: false, message: 'Unauthorised delete' });
    User.delete(req.params.id, function (err, user) {
        if (err)
            return res.send(err);
        res.json({ error: false, message: 'User successfully deleted' });
    });
};