'demande strict';
var dbConn = require('../../config/db.config');

//Client object create
class Demande {
    constructor(demande) {
        this.idDemande = demande.idDemande;
        this.create_time = new Date();
        this.Client_idClient = demande.Client_idClient;
        this.User_idUser = demande.User_idUser;
    }
    static create(newDemande, result) {
        dbConn.query("INSERT INTO demande set ?", newDemande, function (err, res) {
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
        dbConn.query("Select * from demande where idDemande = ? ", id, function (err, res) {
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
        dbConn.query("Select * from demande LEFT JOIN User ON demande.User_idUser = User.idUser where demande.Client_idClient = ? ", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findByUserId(id, result) {
        dbConn.query("Select * from demande where User_idUser = ? ", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static delete(id, result) {
        dbConn.query("DELETE FROM demande WHERE User_idUser = ?", [id], function (err, res) {
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

module.exports = Demande;