'colonne strict';
var dbConn = require('../../config/db.config');
const Playlist = require('./playlist.model')

//Client object create
var Colonne = function (colonne) {
    this.ColonneNbr = colonne.ColonneNbr;
    this.Maquette_idMaquette = colonne.Maquette_idMaquette;
    this.Playlist_idPlaylist = colonne.Playlist_idPlaylist;
};

Colonne.create = function (newColonne, result) {
    dbConn.query("Select * from Colonne where Maquette_idMaquette = ?  AND ColonneNbr = ?", [newColonne.Maquette_idMaquette, newColonne.ColonneNbr], function (err, res) {
        if (!err) {
            res.forEach(element => {
                Playlist.delete(element.Playlist_idPlaylist, function (err, playlist) {
                    if (err)
                        res.send(err);
                });
            });
        }
    });
    dbConn.query("INSERT INTO Colonne set ?", newColonne, function (err, res) {
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

Colonne.findByIdMaquette = function (id, result) {
    dbConn.query("Select * from Colonne where Maquette_idMaquette = ?", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Colonne.findAll = function (result) {
    dbConn.query("Select * from Colonne", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Colonnes : ', res);
            result(null, res);
        }
    });
};


Colonne.delete = function ([idMaquette, colonneNbr], result) {
    dbConn.query("DELETE FROM Colonne WHERE Maquette_idMaquette = ?  AND ColonneNbr = ?", [idMaquette, colonneNbr], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Colonne;