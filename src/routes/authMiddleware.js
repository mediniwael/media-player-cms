const Affichage = require('../models/affichage.model');
const Client = require('../models/client.model');
const Maquette = require('../models/maquette.model');
const Media = require('../models/media.model');
const Playlist = require('../models/playlist.model');
const User = require('../models/user.model');

module.exports.isAuthed = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user[0].admin == 1) {
            res.json({ auth: 1 });
        } else if (req.user[0].admin == 2) {
            res.json({ auth: 2 });
        } else
            res.json({ auth: 0 });
    } else {
        res.json({ auth: -1 });
    }
    next();
}

module.exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource' });
    }
}

module.exports.isSiteAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user[0].admin == 2) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin.' });
    }
}

module.exports.isClientAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user[0].admin == 1) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin for this client.' });
    }
}

module.exports.isClient = (req, res, next) => {
    if (req.user[0].admin == 2)
        req.clientAuth = 1
    if (req.originalUrl.includes("affichages"))
        Affichage.findById(req.params.id, function (err, affichage) {
            if (err) {
                req.clientAuth = 0
                next()
            }
            if (req.user[0].Client_idClient) {
                if (req.user[0].Client_idClient == affichage.Client_idClient)
                    req.clientAuth = 1
            } else
                req.clientAuth = 0
            next()
        });
    else if (req.originalUrl.includes("clients"))
        Client.findById(req.params.id, function (err, client) {
            if (err) {
                req.clientAuth = 0
                next()
            }
            if (req.user[0].Client_idClient) {
                if (req.user[0].Client_idClient == client.Client_idClient)
                    req.clientAuth = 1
            } else
                req.clientAuth = 0
            next()
        });
    else if (req.originalUrl.includes("maquettes"))
        Maquette.findById(req.params.id, function (err, maquette) {
            if (err) {
                req.clientAuth = 0
                next()
            }
            if (req.user[0].Client_idClient) {
                if (req.user[0].Client_idClient == maquette.Client_idClient)
                    req.clientAuth = 1
            } else
                req.clientAuth = 0
            next()
        });
    else if (req.originalUrl.includes("medias"))
        Media.findById(req.params.id, function (err, media) {
            if (err) {
                req.clientAuth = 0
                next()
            }
            if (req.user[0].Client_idClient) {
                if (req.user[0].Client_idClient == media.Client_idClient)
                    req.clientAuth = 1
            } else
                req.clientAuth = 0
            next()
        });
    else if (req.originalUrl.includes("playlists"))
        Playlist.findById(req.params.id, function (err, playlist) {
            if (err) {
                req.clientAuth = 0
                next()
            }
            if (req.user[0].Client_idClient) {
                if (req.user[0].Client_idClient == playlist.Client_idClient)
                    req.clientAuth = 1
            } else
                req.clientAuth = 0
            next()
        });
    else if (req.originalUrl.includes("users"))
        User.findById(req.params.id, function (err, user) {
            if (err) {
                req.clientAuth = 0
                next()
            }
            if (req.user[0].Client_idClient) {
                if (req.user[0].Client_idClient == user.Client_idClient)
                    req.clientAuth = 1
            } else
                req.clientAuth = 0
            next()
        });
}

module.exports.isAdmin = (req, res, next) => {
    console.log("isAdmin");
    if (req.user)
        console.log(req.user);
    console.log("isAdmin");
    if (req.isAuthenticated() && (req.user[0].admin == 1 || req.user[0].admin == 2)) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin.' });
    }
}

module.exports.injectClientId = (req, res, next) => {
    if (req.user[0].Client_idClient)
        req.body.Client_idClient = req.user[0].Client_idClient
    next()
}

