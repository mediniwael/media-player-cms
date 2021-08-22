'maquette strict';
var dbConn = require('../../config/db.config');

//Client object create
var Maquette = function (maquette) {
    this.label = maquette.label;
    this.grid_template_columns = maquette.grid_template_columns;
    this.nbrColonne = maquette.nbrColonne;
    this.Client_idClient = maquette.Client_idClient;
};

Maquette.create = function (newMaquette, result) {
    dbConn.query("INSERT INTO Maquette set ?", newMaquette, function (err, res) {
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
Maquette.findById = function (id, result) {
    dbConn.query("Select * from Maquette where idMaquette = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Maquette.findByClientId = function (id, result) {
    dbConn.query("Select * from Maquette where Client_idClient = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Maquette.findAll = function (result) {
    dbConn.query("Select * from Maquette", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Maquettes : ', res);
            result(null, res);
        }
    });
};
Maquette.update = function (id, Maquette, result) {
    dbConn.query("UPDATE Maquette SET label=?,grid_template_columns=?,nbrColonne=?,Client_idClient=? WHERE idMaquette = ?", [Maquette.label, Maquette.grid_template_columns, Maquette.nbrColonne,Maquette.Client_idClient, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Maquette.delete = function (id, result) {
    dbConn.query("DELETE FROM Maquette WHERE idMaquette = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Maquette;