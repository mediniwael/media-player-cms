'animation strict';
var dbConn = require('../../config/db.config');

//Client object create
var Animation = function (animation) {
    this.label = animation.label;
    this.lien = animation.lien;
};


Animation.create = function (newAnimation, result) {
    dbConn.query("INSERT INTO Animation set ?", newAnimation, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
Animation.findById = function (id, result) {
    dbConn.query("Select * from Animation where idAnimation = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Animation.findwithMediaId = function (result) {
    dbConn.query("Select Animation.label As 'label' ,media.idMedia AS 'idMedia' from Animation INNER JOIN media ON Animation.idAnimation = media.Animation_idAnimation", function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Animation.findAll = function (result) {
    dbConn.query("Select * from Animation", function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Animation.update = function (id, Animation, result) {
    dbConn.query("UPDATE Animation SET label=?,lien=? WHERE idAnimation = ?", [Animation.label, Animation.lien, id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Animation.delete = function (id, result) {
    dbConn.query("DELETE FROM Animation WHERE idAnimation = ?", [id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Animation;