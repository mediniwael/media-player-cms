'use strict';

const Affichage = require('../models/affichage.model');

exports.findAll = function (req, res) {
    Affichage.findAll(function (err, affichage) {
        console.log('controller')
        if (err)
            return res.send(err);
        console.log('res', affichage);
        res.send(affichage);
    });
};


exports.create = function (req, res) {
    console.log(req.body)
    const new_affichage = new Affichage(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Affichage.create(new_affichage, function (err, affichage) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: "Affichage added successfully!", data: affichage });
        });
    }
};


exports.findById = function (req, res) {
    if(req.clientAuth === 0)
        return res.json([]);
    Affichage.findById(req.params.id, function (err, affichage) {
        if (err)
            return res.send(err);
        res.json(affichage);
    });
};

exports.findByClientId = function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user[0].Client_idClient)
            Affichage.findById(req.user[0].Client_idClient, function (err, affichage) {
                if (err)
                    return res.send(err);
                res.json(affichage);
            });
    } else {
        return res.send(err);
    }

};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        if(req.clientAuth === 0)
            return res.json({ error: false, message: 'Unauthorised update' });
        Affichage.update(req.params.id, new Affichage(req.body), function (err, affichage) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: 'Affichage successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    if(req.clientAuth === 0)
            return res.json({ error: false, message: 'Unauthorised delete' });
    Affichage.delete(req.params.id, function (err, affichage) {
        if (err)
            return res.send(err);
        res.json({ error: false, message: 'Affichage successfully deleted' });
    });
};