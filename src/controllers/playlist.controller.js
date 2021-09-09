'use strict';

const Playlist = require('../models/playlist.model');

exports.findAll = function (req, res) {
    Playlist.findAll(function (err, playlist) {
        if (err)
            res.send(err);
        res.send(playlist);
    });
};

exports.create = function (req, res) {
    const new_playlist = new Playlist(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Playlist.create(new_playlist, function (err, playlist) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Playlist added successfully!", data: playlist });
        });
    }
};

exports.findById = function (req, res) {
    if (req.clientAuth === 0)
        return res.json([]);
    Playlist.findById(req.params.id, function (err, playlist) {
        if (err)
            res.send(err);
        res.json(playlist);
    });
};

exports.findByClientId = function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user[0].Client_idClient)
            Playlist.findByClientId(req.user[0].Client_idClient, function (err, playlist) {
                if (err)
                    return res.send(err);
                res.json(playlist);
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
        Playlist.update(req.params.id, new Playlist(req.body), function (err, playlist) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: 'Playlist successfully updated' });
        });
    }
};

exports.findByIdDetails = function (req, res) {
    if (req.clientAuth === 0)
        return res.json([]);
    Playlist.findByIdDetails(req.params.id, function (err, playlist) {
        if (err)
            return res.send(err);
        res.json(playlist);
    });
};

exports.delete = function (req, res) {
    if (req.clientAuth === 0)
        return res.json({ error: false, message: 'Unauthorised delete' });
    Playlist.delete(req.params.id, function (err, playlist) {
        if (err)
            return res.send(err);
        res.json({ error: false, message: 'Playlist successfully deleted' });
    });
};

exports.findDetailsById = function (req, res) {
    if (req.clientAuth === 0)
        return res.json([]);
    Playlist.findDetailsById({ id: req.params.id, client_id: req.params.client_id }, function (err, playlist) {
        if (err)
            res.send(err);
        res.json(playlist);
    });
};
