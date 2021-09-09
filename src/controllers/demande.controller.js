'use strict';

const Demande = require('../models/demande.model');

exports.create = function (req, res) {
    const new_demande = new Demande(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Demande.create(new_demande, function (err, demande) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: "Demande added successfully!", data: new_demande });
        });
    }
};

exports.findById = function (req, res) {
    Demande.findById(req.params.id, function (err, demande) {
        if (err)
            return res.send(err);
        res.json(demande);
    });
};

exports.findByClientId = function (req, res) {
    if (req.user[0].Client_idClient == req.params.id)
        Demande.findByClientId(req.params.id, function (err, demande) {
            if (err)
                return res.send(err);
            res.json(demande);
        });
};

exports.findByUserId = function (req, res) {
    Demande.findByUserId(req.params.id, function (err, demande) {
        if (err)
            return res.send(err);
        res.json(demande);
    });
};

exports.delete = function (req, res) {
    Demande.delete(req.params.id, function (err, demande) {
        if (err)
            return res.send(err);
        res.json({ error: false, message: 'Demande successfully deleted' });
    });
};