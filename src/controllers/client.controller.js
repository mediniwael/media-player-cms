'use strict';

const Client = require('../models/client.model');
const User = require('../models/user.model');
const { mkdir } = require('fs');
const path = require('path');

exports.findAll = function (req, res) {
    Client.findAll(function (err, client) {
        if (err)
            return res.send(err);
        res.send(client);
    });
};

exports.create = function (req, res) {
    const new_client = new Client(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Client.create(new_client, function (err, client) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: "Client added successfully!", data: client });
        });
    }
};

exports.createFromName = function (req, res) {
    const new_client = new Client({ nom: req.body.clientName });
    Client.create(new_client, function (err, client) {
        if (err)
            return res.json({ success: false })
        req.newuser.Client_idClient = client
        User.create(req.newuser, function (err, user) {
            if (err)
                res.json({ success: false })

            mkdir(path.join(__dirname, '..', '..', 'resources', 'images', client + ""), (err) => { })
            mkdir(path.join(__dirname, '..', '..', 'resources', 'videos', client + ""), (err) => { })
            res.json({ success: true })
        })
    });
};

exports.findById = function (req, res) {
    if (req.clientAuth === 0)
        return res.json([]);
    Client.findById(req.params.id, function (err, client) {
        if (err)
            return res.send(err);
        res.json(client);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        if (req.clientAuth === 0)
            return res.json({ error: false, message: 'Unauthorised update' });
        Client.update(req.params.id, new Client(req.body), function (err, client) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: 'Client successfully updated' });
        });
    }

};

exports.delete = function (req, res) {
    if (req.clientAuth === 0)
        return res.json({ error: false, message: 'Unauthorised delete' });
    Client.delete(req.params.id, function (err, client) {
        if (err)
            return res.send(err);
        res.json({ error: false, message: 'Client successfully deleted' });
    });
};