'animation strict';
var dbConn = require('../../config/db.config');

class Animation {
    constructor(animation) {
        this.label = animation.label;
        this.lien = animation.lien;
    }
    static create(newAnimation, result) {
        dbConn.query("INSERT INTO animation set ?", newAnimation, function (err, res) {
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
        dbConn.query("Select * from animation where idAnimation = ? ", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findwithMediaId(result) {
        dbConn.query("Select animation.label As 'label' ,media.idMedia AS 'idMedia' from animation INNER JOIN media ON animation.idAnimation = media.Animation_idAnimation", function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static findAll(result) {
        dbConn.query("Select * from animation", function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static update(id, Animation, result) {
        dbConn.query("UPDATE animation SET label=?,lien=? WHERE idAnimation = ?", [Animation.label, Animation.lien, id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    static delete(id, result) {
        dbConn.query("DELETE FROM animation WHERE idAnimation = ?", [id], function (err, res) {
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

module.exports = Animation;