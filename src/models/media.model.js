'media strict';
var dbConn = require('../../config/db.config');

//Client object create
var Media = function (media) {
    this.label = media.label;
    this.type = media.type;
    this.lien = media.lien;
    this.Client_idClient = media.Client_idClient;
    this.Animation_idAnimation = media.Animation_idAnimation;
};

Media.create = function (newMedia, result) {
    dbConn.query("INSERT INTO Media set ?", newMedia, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
Media.findById = function (id, result) {
    dbConn.query("Select * from Media where idMedia = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Media.findByClientId = function (id, result) {
    dbConn.query("Select * from Media where Client_idClient = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Media.findByAnimId = function (id, result) {
    dbConn.query("Select * from Media where Animation_idAnimation = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Media.findAll = function (result) {
    dbConn.query("Select * from Media", function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Media.update = function (id, Media, result) {
    dbConn.query("UPDATE Media SET label=?,type=?,lien=?,Client_idClient=?,Animation_idAnimation=? WHERE idMedia = ?", [Media.label, Media.type, Media.lien, Media.Client_idClient, Media.Animation_idAnimation, id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Media.delete = function (id, result) {
    dbConn.query("DELETE FROM Media WHERE idMedia = ?", [id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Media;