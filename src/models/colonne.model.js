'colonne strict';
var dbConn = require('../../config/db.config');
const Playlist = require('./playlist.model')

//Client object create
class Colonne {
    constructor(colonne) {
        this.ColonneNbr = colonne.ColonneNbr;
        this.Maquette_idMaquette = colonne.Maquette_idMaquette;
        this.Playlist_idPlaylist = colonne.Playlist_idPlaylist;
        this.Type = colonne.Type;
    }
    static update(id, result) {
        dbConn.query("UPDATE colonne SET Playlist_idPlaylist=? WHERE Playlist_idPlaylist = ?", [id[1], id[0]], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    static create(newColonne, result) {
        dbConn.query("INSERT INTO colonne set ? ON DUPLICATE KEY UPDATE Playlist_idPlaylist = ?, Type = ?", [newColonne, newColonne.Playlist_idPlaylist, newColonne.Type], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res.insertId);
            }
        });
    }
    static findByIdMaquette(id, result) {
        dbConn.query("Select * from colonne where Maquette_idMaquette = ?", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findAll(result) {
        dbConn.query("Select * from colonne", function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static delete([idMaquette, colonneNbr], result) {
        dbConn.query("DELETE FROM colonne WHERE Maquette_idMaquette = ?  AND ColonneNbr = ?", [idMaquette, colonneNbr], function (err, res) {
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

module.exports = Colonne;