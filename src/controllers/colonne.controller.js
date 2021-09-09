'use strict';

const Colonne = require('../models/colonne.model');

exports.findAll = function (req, res) {
    Colonne.findAll(function (err, colonne) {
        if (err)
            return res.send(err);
        res.send(colonne);
    });
};

exports.create = function (req, res) {
    const new_colonne = new Colonne(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Colonne.create(new_colonne, function (err, colonne) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: "Colonne added successfully!", data: colonne });
        });
    }
};

exports.update = function (req, res) {

    Colonne.update([req.params.id, req.params.newid], function (err, colonne) {
        if (err)
            return res.send(err);
        res.json({ error: false, message: 'Colonne successfully updated' });
    });


};

exports.delete = function (req, res) {
    Colonne.delete([req.params.idMaq, req.params.nbr], function (err, colonne) {
        if (err)
            return res.send(err);
        res.json({ error: false, message: 'Colonne successfully deleted' });
    });
};