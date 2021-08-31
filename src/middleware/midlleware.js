var events = require('events');
const Affichage = require('../models/affichage.model');
var eventEmitter = new events.EventEmitter();
const fs = require('fs');
const Media = require('../models/media.model');
const path = require('path');



module.exports.isRan = (req, res, next) => {
    console.log("Ran");
    next();
}

module.exports.logBody = (req, res, next) => {
    console.log(req.body);
    next()
}

module.exports.upload = (req, res, next) => {
    var type = req.files.file.mimetype
    var folder
    if (type.includes('video')) {
        req.body.type = 'Video'
        folder = 'videos'
    }
    if (type.includes('image')) {
        req.body.type = 'Image'
        folder = 'images'
    }
    req.body.lien = req.files.file.name

    req.body.link = "mediaplayer/" + folder + ".html"

    req.files.file.mv(__dirname + '../../../resources/' + folder + '/' + req.body.Client_idClient + '/' + req.files.file.name, function (err) {
        if (err)
            console.error(err);
    })
    next()
}

module.exports.emitDisplayChanges = (req, res, next) => {
    if (req.user)
        if (req.user[0].Client_idClient) {
            var ClientId = req.user[0].Client_idClient
        }
    if (ClientId && req.method != "GET") {
        Affichage.findLabelByClientId(ClientId, function (err, affichage) {
            if (err)
                return res.send(err);
            affichage.forEach(element => {
                const room = element.lien
                eventEmitter.emit("changes detected", room)
            });
        });
    }
    next()
}

module.exports.mediaDelete = (req, res, next) => {
    Media.findById(req.params.id, function (err, media) {
        if (err)
            next()
        var folder
        if (media[0].type == "Video")
            folder = "videos"
        if (media[0].type == "Image")
            folder = "images"
        fs.unlink(path.join(__dirname, '..', '..', 'resources', folder, media[0].Client_idClient + "", media[0].lien), (err) => {
            if (err) {
                console.error(err);
            }
            next()
        })
    });
}







module.exports.eventEmitter1 = eventEmitter;