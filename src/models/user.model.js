'user strict';
var dbConn = require('../../config/db.config');

//Client object create
class User {
    constructor(user) {
        this.idUser = user.idUser;
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
        this.salt = user.salt;
        this.create_time = new Date();
        this.Client_idClient = user.Client_idClient;
        this.admin = user.admin;
    }
    static create(newUser, result) {
        dbConn.query("INSERT INTO User set ?", newUser, function (err, res) {
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
        dbConn.query("Select * from User where idUser = ? ", id, function (err, res) {
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
        dbConn.query("Select * from User where Client_idClient = ? ", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findByClientIdAndUnaffected(id, result) {
        dbConn.query("Select * from User where Client_idClient = ? OR admin = 0 ", id, function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    static findOne(username, result) {
        dbConn.query("Select * from User where username = ? ", username, function (err, res) {
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
        dbConn.query("Select * from User Left JOIN Client ON User.Client_idClient = Client.idClient", function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
    }
    static update(id, User, result) {
        dbConn.query("UPDATE User SET username=?,email=?,password=?,salt=?,admin=? WHERE idUser = ?", [User.username, User.email, User.password, User.salt, User.admin, id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    static updateAdmin(id, User, result) {
        dbConn.query("UPDATE User SET admin=? WHERE idUser = ?", [User.admin, id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    static setClientNull(id, result) {
        dbConn.query("UPDATE User SET Client_idClient= NULL WHERE idUser = ?", [id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    static updateClient(id, User, result) {
        dbConn.query("UPDATE User SET Client_idClient=? WHERE idUser = ?", [User.Client_idClient, id], function (err, res) {
            if (err) {
                console.error("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    static delete(id, result) {
        dbConn.query("DELETE FROM User WHERE idUser = ?", [id], function (err, res) {
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

module.exports = User;