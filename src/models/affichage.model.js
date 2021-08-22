'affichage strict';
var dbConn = require('../../config/db.config');

//Client object create
var Affichage = function (affichage) {
    this.label = affichage.label;
    this.longueur = affichage.longueur;
    this.largeur = affichage.largeur;
    this.lien = affichage.lien
    this.Client_idClient = affichage.Client_idClient;
    this.Maquette_idMaquette = affichage.Maquette_idMaquette;
};

Affichage.create = function (newAffichage, result) {
    dbConn.query("INSERT INTO Affichage set ?", newAffichage, function (err, res) {
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
Affichage.findById = function (id, result) {
    dbConn.query("Select * from Affichage where idAffichage = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Affichage.findByClientId = function (id, result) {
    dbConn.query("Select * from Affichage where Client_idClient = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Affichage.findAll = function (result) {
    dbConn.query("Select * from Affichage", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Affichages : ', res);
            result(null, res);
        }
    });
};
Affichage.update = function (id, Affichage, result) {
    dbConn.query("UPDATE Affichage SET label=?,longueur=?,largeur=?,lien=?,Client_idClient=?,Maquette_idMaquette=? WHERE idAffichage = ?", [Affichage.label, Affichage.longueur, Affichage.largeur, Affichage.lien, Affichage.Client_idClient, Affichage.Maquette_idMaquette, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Affichage.delete = function (id, result) {
    dbConn.query("DELETE FROM Affichage WHERE idAffichage = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Affichage;