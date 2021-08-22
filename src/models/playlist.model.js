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
    console.log(newPlaylist);
    dbConn.query("INSERT INTO Playlist set ?", newPlaylist, function (err, res) {
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

Playlist.findByClientId = function (id, result) {
    dbConn.query("Select * from Playlist where Client_idClient = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
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
            console.log("error: ", err);
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
                console.log("error: ", err);
                result(err, null);
            }
            else {
                console.log("findIdPlaylistByIdMedia res");
                console.log(res);
                result(null, res);
            }
        });
    });
};
Playlist.findAll = function (result) {
    dbConn.query("Select * from Playlist", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Playlists : ', res);
            result(null, res);
        }
    });
};
Playlist.update = function (id, Playlist, result) {
    dbConn.query("UPDATE Playlist SET label=?,userCreated=?,Client_idClient=? WHERE idPlaylist = ?", [Playlist.label, Playlist.userCreated, Playlist.Client_idClient, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Playlist.delete = function (id, result) {
    dbConn.query("DELETE FROM Playlist WHERE idPlaylist = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
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
            console.log("error: ", err);
            result(err, null);
        }
        else {
            dbConn.query("Select playlist from playlistDetails where id = ? ", id, function (err, res1) {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else {
                    const play = [res1[0] , res];
                    result(null, play);
                }
            });
        }
    });

}
module.exports = Playlist;