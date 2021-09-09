'affichage strict';
var dbConn = require('../../config/db.config');

class Affichage {
    constructor(affichage) {
        this.label = affichage.label;
        this.longueur = affichage.longueur;
        this.largeur = affichage.largeur;
        this.lien = affichage.lien;
        this.Client_idClient = affichage.Client_idClient;
        this.Maquette_idMaquette = affichage.Maquette_idMaquette;
    }
    static create(newAffichage, result) {
        dbConn.query("INSERT INTO affichage set ?", newAffichage, function (err, res) {
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
        dbConn.query("Select * from affichage where idAffichage = ? ", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findDetailByLien(lien, result) {
        dbConn.query("SELECT maquette.grid_template_columns AS grid , maquette.nbrColonne AS colonne_total , colonne.ColonneNbr AS colonne_nbr , colonne.Type AS colonne_type, playlist.label AS playlist_label, media.label AS media_label, playlist_has_media.rang AS media_rang , media.lien AS media_lien, animation.label AS animation_label, animation.lien AS animation_lien FROM affichage INNER JOIN maquette ON affichage.Maquette_idMaquette = maquette.idMaquette INNER JOIN colonne ON maquette.idMaquette = colonne.Maquette_idMaquette LEFT JOIN playlist ON colonne.Playlist_idPlaylist = playlist.idPlaylist LEFT JOIN playlist_has_media ON playlist.idPlaylist = playlist_has_media.Playlist_idPlaylist LEFT JOIN media ON playlist_has_media.Media_idMedia = media.idMedia LEFT JOIN animation ON media.Animation_idAnimation = animation.idAnimation WHERE affichage.lien = ? AND colonne.ColonneNbr <= maquette.nbrColonne", lien, function (err, res) {
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
        dbConn.query("Select * from affichage where Client_idClient = ? ", id, function (err, res) {
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
        dbConn.query("Select * from affichage", function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static update(id, Affichage, result) {
        dbConn.query("UPDATE affichage SET label=?,longueur=?,largeur=?,lien=?,Client_idClient=?,Maquette_idMaquette=? WHERE idAffichage = ?", [Affichage.label, Affichage.longueur, Affichage.largeur, Affichage.lien, Affichage.Client_idClient, Affichage.Maquette_idMaquette, id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    static delete(id, result) {
        dbConn.query("DELETE FROM affichage WHERE idAffichage = ?", [id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static findLabelByClientId(id, result) {
        dbConn.query("SELECT affichage.lien from affichage WHERE Client_idClient = ? AND lien NOT LIKE ''", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
}

module.exports = Affichage;