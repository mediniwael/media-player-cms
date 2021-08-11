'playlist_has_media strict';
var dbConn = require('../../config/db.config');

//Client object create
var Playlist_has_media = function (playlist_has_media) {
    this.Playlist_idPlaylist = playlist_has_media.Playlist_idPlaylist;
    this.Media_idMedia = playlist_has_media.Media_idMedia;
    this.rang = playlist_has_media.rang;
};

Playlist_has_media.create = function (newPlaylist_has_media, result) {
    dbConn.query("INSERT INTO Playlist_has_media set ?", newPlaylist_has_media, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log("res.insertId: "+res.insertId);
            result(null, res.insertId);
        }
    });
};

Playlist_has_media.findIdPlaylistByIdMedia = function (id, result) {
    dbConn.query("Select Playlist_idPlaylist from Playlist_has_media where Media_idMedia = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Playlist_has_media.findAll = function (result) {
    dbConn.query("Select * from Playlist_has_media", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Playlist_has_medias : ', res);
            result(null, res);
        }
    });
};

Playlist_has_media.delete = function ([idPlaylist, idMedia], result) {
    dbConn.query("DELETE FROM Playlist_has_media WHERE Playlist_idPlaylist = ? AND Media_idMedia = ?", [idPlaylist, idMedia], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Playlist_has_media;