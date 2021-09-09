'use strict';

const Media = require('../models/media.model');
const Playlist = require('../models/playlist.model');
const Playlist_has_media = require('../models/playlist_has_media.model')
const Colonne = require('../models/colonne.model')

exports.findAll = function (req, res) {
    Media.findAll(function (err, media) {
        if (err)
            return res.send(err);
        res.send(media);
    });
};

exports.create = function (req, res) {
    const new_media = new Media(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Media.create(new_media, function (err, media) {
            if (err)
                console.error(err.sqlMessage);
            res.redirect("../../../" + req.body.link);
        });
    }
};

exports.findById = function (req, res) {
    if (req.clientAuth === 0)
        return res.json([]);
    Media.findById(req.params.id, function (err, media) {
        if (err)
            return res.send(err);
        res.json(media);
    });
};

exports.findByClientId = function (req, res) {
    if (req.isAuthenticated()) {

        if (req.user[0].Client_idClient)
            Media.findByClientId(req.user[0].Client_idClient, function (err, media) {
                if (err)
                    return res.send(err);
                res.json(media);
            });
    } else {
        return res.send(err);
    }

};

exports.findByAnimId = function (req, res) {
    if (req.isAuthenticated()) {

        if (req.user[0].Client_idClient)
            Media.findByAnimId(req.params.id, function (err, media) {
                if (err)
                    return res.send(err);
                res.json(media);
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
        Media.update(req.params.id, new Media(req.body), function (err, media) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: 'Media successfully updated' });
        });
    }

};

exports.delete = function (req, res) {
    if (req.clientAuth === 0)
        return res.json({ error: false, message: 'Unauthorised delete' });
    Playlist_has_media.findIdPlaylistByIdMedia(req.params.id, function (err, phm) {
        if (err)
            return res.send(err);
        phm.forEach(p => {
            Playlist.findById(p.Playlist_idPlaylist, function (err, playlist) {
                if (err)
                    return res.send(err);
                if (playlist[0].userCreated === "No")
                    Playlist.delete(p.Playlist_idPlaylist, function (err, playlist) {
                        if (err)
                            return res.send(err);
                    });
            });
        });
    });

    Media.delete(req.params.id, function (err, media) {
        if (err)
            return res.send(err);
        res.json({ error: false, message: 'Media successfully deleted' });
    });
};

exports.addToMaquette = function (req, res) {
    const newPlaylist = new Playlist({ userCreated: "No", Client_idClient: req.body.Client_idClient })
    Playlist.create(newPlaylist, function (err, playlist) {
        if (err)
            return res.send(err);
        const newPhm = new Playlist_has_media({ Playlist_idPlaylist: playlist, Media_idMedia: req.params.id, rang: 1 })
        Playlist_has_media.create(newPhm, function (err, phm) {
            if (err)
                return res.send(err);
            const newColonne = new Colonne({ ColonneNbr: req.params.colNbr, Maquette_idMaquette: req.params.maqId, Playlist_idPlaylist: playlist, Type: req.params.type })
            Colonne.create(newColonne, function (err, colonne) {
                if (err)
                    return res.send(err);
                res.json({ error: false, message: 'Media successfully added To Maquette' });
            });
        });
    });
}