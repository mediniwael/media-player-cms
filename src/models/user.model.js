'user strict';
var dbConn = require('../../config/db.config');

//Client object create
var User = function (user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.create_time = new Date();
    this.Client_idClient = user.Client_idClient;
};

User.create = function (newUser, result) {
    dbConn.query("INSERT INTO User set ?", newUser, function (err, res) {
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
User.findById = function (id, result) {
    dbConn.query("Select * from User where idUser = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
User.findAll = function (result) {
    dbConn.query("Select * from User", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Users : ', res);
            result(null, res);
        }
    });
};
User.update = function (id, User, result) {
    dbConn.query("UPDATE User SET username=?,email=?,password=? WHERE idUser = ?", [User.username, User.email, User.password, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
User.delete = function (id, result) {
    dbConn.query("DELETE FROM User WHERE idUser = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = User;