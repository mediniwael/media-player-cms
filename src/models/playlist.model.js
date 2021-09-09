'playlist strict';
var dbConn = require('../../config/db.config');
const Playlist_has_media = require("./playlist_has_media.model")

//Client object create
class Playlist {
    constructor(playlist) {
        this.label = playlist.label;
        this.userCreated = playlist.userCreated;
        this.Client_idClient = playlist.Client_idClient;
    }
    static create(newPlaylist, result) {
        dbConn.query("INSERT INTO playlist set ?", newPlaylist, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res.insertId);
            }
        });
    }
    static findByClientId(id, result) {
        dbConn.query("Select * from playlist where Client_idClient = ? AND userCreated = 'Yes'", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findById(id, result) {
        dbConn.query("Select * from playlist where idPlaylist = ? ", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findGenericByIdMedia(id, result) {
        Playlist_has_media.findIdPlaylistByIdMedia(id, function (err, playlist_has_media) {
            playlist_has_media = playlist_has_media.map(ph => ph.Playlist_idPlaylist);
            if (err)
                res.send(err);
            dbConn.query("Select * from playlist where idPlaylist in (?) ", playlist_has_media, function (err, res) {
                if (err) {
                    console.error("error: ", err);
                    result(err, null);
                }
                else {
                    result(null, res);
                }
            });
        });
    }
    static findAll(result) {
        dbConn.query("Select * from playlist", function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static update(id, Playlist, result) {
        dbConn.query("UPDATE playlist SET label=?,userCreated=?,Client_idClient=? WHERE idPlaylist = ?", [Playlist.label, Playlist.userCreated, Playlist.Client_idClient, id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    static delete(id, result) {
        dbConn.query("DELETE FROM playlist WHERE idPlaylist = ?", [id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static findByIdDetails(id, result) {
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
    static findDetailsById(params, result) {
        var qr = "SELECT * , media.label AS media_label,playlist.label AS playlist_label FROM playlist INNER JOIN playlist_has_media ON playlist.idPlaylist = playlist_has_media.Playlist_idPlaylist LEFT JOIN media ON playlist_has_media.Media_idMedia = media.idMedia WHERE playlist.userCreated= 'Yes' AND playlist.idPlaylist = ?";
        var parameters = [params.id];
        if (params.client_id != -1) {
            qr = "SELECT * , media.label AS media_label,playlist.label AS playlist_label FROM playlist INNER JOIN playlist_has_media ON playlist.idPlaylist = playlist_has_media.Playlist_idPlaylist LEFT JOIN media ON playlist_has_media.Media_idMedia = media.idMedia WHERE playlist.userCreated= 'Yes'  AND  playlist.idPlaylist = ? AND playlist.Client_idClient = ?";
            var parameters = [params.id, params.client_id];
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
    }
}

module.exports = Playlist;