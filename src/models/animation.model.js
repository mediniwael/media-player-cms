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
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Animation.findById = function (id, result) {
    dbConn.query("Select * from Animation where idAnimation = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Animation.findAll = function (result) {
    dbConn.query("Select * from Animation", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Animations : ', res);
            result(null, res);
        }
    });
};
Animation.update = function (id, Animation, result) {
    dbConn.query("UPDATE Animation SET label=?,lien=? WHERE idAnimation = ?", [Animation.label, Animation.lien, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Animation.delete = function (id, result) {
    dbConn.query("DELETE FROM Animation WHERE idAnimation = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Animation;