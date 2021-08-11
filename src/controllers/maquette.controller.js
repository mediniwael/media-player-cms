'use strict';

const Maquette = require('../models/maquette.model');
const Colonne = require('../models/colonne.model');
const Playlist = require('../models/playlist.model');

exports.findAll = function (req, res) {
    Maquette.findAll(function (err, maquette) {
        console.log('controller')
        if (err)
            res.send(err);
        //console.log(res);
        console.log('res', maquette);
        res.send(maquette);
    });
};


exports.create = function (req, res) {
    console.log(req.body)
    const new_maquette = new Maquette(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Maquette.create(new_maquette, function (err, maquette) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Maquette added successfully!", data: maquette });
        });
    }
};


exports.findById = function (req, res) {
    Maquette.findById(req.params.id, function (err, maquette) {
        if (err)
            res.send(err);
        res.json(maquette);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Maquette.update(req.params.id, new Maquette(req.body), function (err, maquette) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Maquette successfully updated' });
        });
    }

};


exports.delete = function (req, res) {

    Colonne.findByIdMaquette(req.params.id, function (err, colonne) {
        if (err)
            res.send(err);
        colonne.forEach(c => {
            Playlist.findById(c.Playlist_idPlaylist, function (err, playlist) {
                if (err)
                    res.send(err);
                if (playlist[0].userCreated === "No")
                    Playlist.delete(c.Playlist_idPlaylist, function (err, playlist) {
                        if (err)
                            res.send(err);
                    });
            });
        });
    });

    Maquette.delete(req.params.id, function (err, maquette) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Maquette successfully deleted' });
    });
};