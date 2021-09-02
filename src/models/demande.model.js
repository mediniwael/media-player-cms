'demande strict';
var dbConn = require('../../config/db.config');

//Client object create
var Demande = function (demande) {
    this.idDemande = demande.idDemande
    this.create_time = new Date();
    this.Client_idClient = demande.Client_idClient;
    this.User_idUser = demande.User_idUser
};

Demande.create = function (newDemande, result) {
    dbConn.query("INSERT INTO Demande set ?", newDemande, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
Demande.findById = function (id, result) {
    dbConn.query("Select * from Demande where idDemande = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Demande.findByClientId = function (id, result) {
    dbConn.query("Select * from Demande LEFT JOIN user ON Demande.User_idUser = user.idUser where Demande.Client_idClient = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Demande.findByUserId = function (id, result) {
    dbConn.query("Select * from Demande where User_idUser = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Demande.delete = function (id, result) {
    dbConn.query("DELETE FROM Demande WHERE User_idUser = ?", [id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Demande;