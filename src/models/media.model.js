'media strict';
var dbConn = require('../../config/db.config');

//Client object create
class Media {
    constructor(media) {
        this.label = media.label;
        this.type = media.type;
        this.lien = media.lien;
        this.Client_idClient = media.Client_idClient;
        this.Animation_idAnimation = media.Animation_idAnimation;
    }
    static create(newMedia, result) {
        dbConn.query("INSERT INTO media set ?", newMedia, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res.insertId);
            }
        });
    }
    static findById(id, result) {
        dbConn.query("Select * from media where idMedia = ? ", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findByClientId(id, result) {
        dbConn.query("Select * from media where Client_idClient = ? ", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findByAnimId(id, result) {
        dbConn.query("Select * from media where Animation_idAnimation = ? ", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findAll(result) {
        dbConn.query("Select * from media", function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static update(id, Media, result) {
        dbConn.query("UPDATE media SET label=?,type=?,lien=?,Client_idClient=?,Animation_idAnimation=? WHERE idMedia = ?", [Media.label, Media.type, Media.lien, Media.Client_idClient, Media.Animation_idAnimation, id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    static delete(id, result) {
        dbConn.query("DELETE FROM media WHERE idMedia = ?", [id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
}

module.exports = Media;