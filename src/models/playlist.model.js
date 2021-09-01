'playlist strict';
var dbConn = require('../../config/db.config');
const Playlist_has_media = require("./playlist_has_media.model")

//Client object create
var Playlist = function (playlist) {
    this.label = playlist.label;
    this.userCreated = playlist.userCreated;
    this.Client_idClient = playlist.Client_idClient;
};

Playlist.create = function (newPlaylist, result) {
    dbConn.query("INSERT INTO Playlist set ?", newPlaylist, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};

Playlist.findByClientId = function (id, result) {
    dbConn.query("Select * from Playlist where Client_idClient = ? AND userCreated = 'Yes'", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Playlist.findById = function (id, result) {
    dbConn.query("Select * from Playlist where idPlaylist = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Playlist.findGenericByIdMedia = function (id, result) {
    Playlist_has_media.findIdPlaylistByIdMedia(id, function (err, playlist_has_media) {
        playlist_has_media = playlist_has_media.map(ph => ph.Playlist_idPlaylist)
        if (err)
            res.send(err);
        dbConn.query("Select * from Playlist where idPlaylist in (?) ", playlist_has_media, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    });
};
Playlist.findAll = function (result) {
    dbConn.query("Select * from Playlist", function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Playlist.update = function (id, Playlist, result) {
    dbConn.query("UPDATE Playlist SET label=?,userCreated=?,Client_idClient=? WHERE idPlaylist = ?", [Playlist.label, Playlist.userCreated, Playlist.Client_idClient, id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Playlist.delete = function (id, result) {
    dbConn.query("DELETE FROM Playlist WHERE idPlaylist = ?", [id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Playlist.findByIdDetails = function (id, result) {
    dbConn.query("Select media, type from playlistDetails where id = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            dbConn.query("Select playlist from playlistDetails where id = ? ", id, function (err, res1) {
                if (err) {
                    console.error("error: ", err);
                    result(err, null);
                }
                else {
                    const play = [res1[0], res];
                    result(null, play);
                }
            });
        }
    });
}

//SELECT * , media.label AS media_label FROM playlist INNER JOIN playlist_has_media ON playlist.idPlaylist = playlist_has_media.Playlist_idPlaylist LEFT JOIN media ON playlist_has_media.Media_idMedia = media.idMedia WHERE playlist.userCreated= 'Yes' AND playlist.Client_idClient = 1 AND  playlist.idPlaylist = 386

Playlist.findDetailsById = function (params, result) {
    var qr = "SELECT * , media.label AS media_label,playlist.label AS playlist_label FROM playlist INNER JOIN playlist_has_media ON playlist.idPlaylist = playlist_has_media.Playlist_idPlaylist LEFT JOIN media ON playlist_has_media.Media_idMedia = media.idMedia WHERE playlist.userCreated= 'Yes' AND playlist.idPlaylist = ?"
    var parameters = [params.id]
    if (params.client_id != -1) {
        qr = "SELECT * , media.label AS media_label,playlist.label AS playlist_label FROM playlist INNER JOIN playlist_has_media ON playlist.idPlaylist = playlist_has_media.Playlist_idPlaylist LEFT JOIN media ON playlist_has_media.Media_idMedia = media.idMedia WHERE playlist.userCreated= 'Yes'  AND  playlist.idPlaylist = ? AND playlist.Client_idClient = ?"
        var parameters = [params.id, params.client_id]
    }
    dbConn.query(qr, parameters, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Playlist;