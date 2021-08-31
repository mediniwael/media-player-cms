'colonne strict';
var dbConn = require('../../config/db.config');
const Playlist = require('./playlist.model')

//Client object create
var Colonne = function (colonne) {
    this.ColonneNbr = colonne.ColonneNbr;
    this.Maquette_idMaquette = colonne.Maquette_idMaquette;
    this.Playlist_idPlaylist = colonne.Playlist_idPlaylist;
    this.Type = colonne.Type;
};

Colonne.update = function (id, result) {
    dbConn.query("UPDATE colonne SET Playlist_idPlaylist=? WHERE Playlist_idPlaylist = ?", [id[1], id[0]], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Colonne.create = function (newColonne, result) {
    dbConn.query("INSERT INTO Colonne set ? ON DUPLICATE KEY UPDATE Playlist_idPlaylist = ?, Type = ?", [newColonne, newColonne.Playlist_idPlaylist, newColonne.Type], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};

Colonne.findByIdMaquette = function (id, result) {
    dbConn.query("Select * from Colonne where Maquette_idMaquette = ?", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
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
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


Colonne.delete = function ([idMaquette, colonneNbr], result) {
    dbConn.query("DELETE FROM Colonne WHERE Maquette_idMaquette = ?  AND ColonneNbr = ?", [idMaquette, colonneNbr], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Colonne;