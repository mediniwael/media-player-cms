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
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
Affichage.findById = function (id, result) {
    dbConn.query("Select * from Affichage where idAffichage = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Affichage.findDetailByLien = function (lien, result) {
    dbConn.query("SELECT maquette.grid_template_columns AS grid , maquette.nbrColonne AS colonne_total , colonne.ColonneNbr AS colonne_nbr , colonne.Type AS colonne_type, playlist.label AS playlist_label, media.label AS media_label, playlist_has_media.rang AS media_rang , media.lien AS media_lien, animation.label AS animation_label, animation.lien AS animation_lien FROM affichage INNER JOIN maquette ON affichage.Maquette_idMaquette = maquette.idMaquette INNER JOIN colonne ON maquette.idMaquette = colonne.Maquette_idMaquette LEFT JOIN playlist ON colonne.Playlist_idPlaylist = playlist.idPlaylist LEFT JOIN playlist_has_media ON playlist.idPlaylist = playlist_has_media.Playlist_idPlaylist LEFT JOIN media ON playlist_has_media.Media_idMedia = media.idMedia LEFT JOIN animation ON media.Animation_idAnimation = animation.idAnimation WHERE affichage.lien = ? AND colonne.ColonneNbr <= maquette.nbrColonne", lien, function (err, res) {
        if (err) {
            console.error("error: ", err);
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
            console.error("error: ", err);
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
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Affichage.update = function (id, Affichage, result) {
    dbConn.query("UPDATE Affichage SET label=?,longueur=?,largeur=?,lien=?,Client_idClient=?,Maquette_idMaquette=? WHERE idAffichage = ?", [Affichage.label, Affichage.longueur, Affichage.largeur, Affichage.lien, Affichage.Client_idClient, Affichage.Maquette_idMaquette, id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Affichage.delete = function (id, result) {
    dbConn.query("DELETE FROM Affichage WHERE idAffichage = ?", [id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

//SELECT affichage.lien from affichage WHERE Client_idClient = 1 AND lien NOT LIKE ''
Affichage.findLabelByClientId = function (id, result) {
    dbConn.query("SELECT affichage.lien from affichage WHERE Client_idClient = ? AND lien NOT LIKE ''", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Affichage;