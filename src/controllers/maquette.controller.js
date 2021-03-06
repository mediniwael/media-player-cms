'use strict';

const Maquette = require('../models/maquette.model');
const Colonne = require('../models/colonne.model');
const Playlist = require('../models/playlist.model');

exports.findAll = function (req, res) {
    Maquette.findAll(function (err, maquette) {
        if (err)
            return res.send(err);
        res.send(maquette);
    });
};

exports.findByClientId = function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user[0].Client_idClient)
            Maquette.findByClientId(req.user[0].Client_idClient, function (err, maquette) {
                if (err)
                    return res.send(err);
                res.json(maquette);
            });
    } else {
        return res.send(err);
    }
};

exports.create = function (req, res) {
    const new_maquette = new Maquette(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Maquette.create(new_maquette, function (err, maquette) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: "Maquette added successfully!", data: maquette });
        });
    }
};

exports.findById = function (req, res) {
    if (req.clientAuth === 0)
        return res.json([]);
    Maquette.findById(req.params.id, function (err, maquette) {
        if (err)
            return res.send(err);
        res.json(maquette);
    });
};

exports.findDetailById = function (req, res) {
    if (req.clientAuth === 0)
        return res.json([]);
    Maquette.findDetailById(req.params.id, function (err, maquette) {
        if (err)
            return res.send(err);
        res.json(maquette);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        if (req.clientAuth === 0)
            return res.json({ error: false, message: 'Unauthorised update' });
        Maquette.update(req.params.id, new Maquette(req.body), function (err, maquette) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: 'Maquette successfully updated' });
        });
    }
};

exports.delete = function (req, res) {
    if (req.clientAuth === 0)
        return res.json({ error: false, message: 'Unauthorised delete' });
    Colonne.findByIdMaquette(req.params.id, function (err, colonne) {
        if (err)
            return res.send(err);
        colonne.forEach(c => {
            console.log(c);
            Playlist.findById(c.Playlist_idPlaylist, function (err, playlist) {
                if (err)
                    console.error(err)
                if (!err && playlist[0].userCreated === "No")
                    Playlist.delete(c.Playlist_idPlaylist, function (err, playlist) {
                        if (err)
                            return res.send(err);
                    });
            });
        });
    });

    Maquette.delete(req.params.id, function (err, maquette) {
        if (err)
            return res.send(err);
        res.json({ error: false, message: 'Maquette successfully deleted' });
    });
};