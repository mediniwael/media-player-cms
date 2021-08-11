'client strict';
var dbConn = require('../../config/db.config');

//Client object create
var Client = function (client) {
    this.nom = client.nom;
};

Client.create = function (newClient, result) {
    dbConn.query("INSERT INTO Client set ?", newClient, function (err, res) {
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
Client.findById = function (id, result) {
    dbConn.query("Select * from Client where idClient = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Client.findAll = function (result) {
    dbConn.query("Select * from Client", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Clients : ', res);
            result(null, res);
        }
    });
};
Client.update = function (id, Client, result) {
    dbConn.query("UPDATE Client SET nom=? WHERE idClient = ?", [Client.nom, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Client.delete = function (id, result) {
    dbConn.query("DELETE FROM Client WHERE idClient = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Client;