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
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
Maquette.findById = function (id, result) {
    dbConn.query("Select * from Maquette where idMaquette = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Maquette.findDetailById = function (id, result) {
    dbConn.query("SELECT * ,media.lien AS media_link,maquette.label as maquette_label, playlist.label as playlist_label, media.label AS media_label, animation.label AS anim_label FROM `maquette` INNER JOIN colonne ON maquette.idMaquette = colonne.Maquette_idMaquette LEFT JOIN playlist ON colonne.Playlist_idPlaylist = playlist.idPlaylist LEFT JOIN playlist_has_media ON playlist.idPlaylist = playlist_has_media.Playlist_idPlaylist LEFT JOIN media ON playlist_has_media.Media_idMedia = media.idMedia LEFT JOIN animation ON media.Animation_idAnimation = animation.idAnimation WHERE idMaquette = ? AND ColonneNbr <= nbrColonne", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
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
            console.error("error: ", err);
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
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Maquette.update = function (id, Maquette, result) {
    dbConn.query("UPDATE Maquette SET label=?,grid_template_columns=?,nbrColonne=? WHERE idMaquette = ?", [Maquette.label, Maquette.grid_template_columns, Maquette.nbrColonne, id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Maquette.delete = function (id, result) {
    dbConn.query("DELETE FROM Maquette WHERE idMaquette = ?", [id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Maquette;