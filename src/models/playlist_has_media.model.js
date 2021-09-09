'playlist_has_media strict';
var dbConn = require('../../config/db.config');

//Client object create
class Playlist_has_media {
    constructor(playlist_has_media) {
        this.Playlist_idPlaylist = playlist_has_media.Playlist_idPlaylist;
        this.Media_idMedia = playlist_has_media.Media_idMedia;
        this.rang = playlist_has_media.rang;
    }
    static create(newPlaylist_has_media, result) {
        dbConn.query("INSERT INTO playlist_has_media set ?", newPlaylist_has_media, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res.insertId);
            }
        });
    }
    static findIdPlaylistByIdMedia(id, result) {
        dbConn.query("Select Playlist_idPlaylist from playlist_has_media where Media_idMedia = ? ", id, function (err, res) {
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
        dbConn.query("Select * from playlist_has_media", function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static delete([idPlaylist, idMedia], result) {
        dbConn.query("DELETE FROM playlist_has_media WHERE Playlist_idPlaylist = ? AND Media_idMedia = ?", [idPlaylist, idMedia], function (err, res) {
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

module.exports = Playlist_has_media;