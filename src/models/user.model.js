'user strict';
var dbConn = require('../../config/db.config');

//Client object create
var User = function (user) {
    this.idUser = user.idUser
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.salt = user.salt;
    this.create_time = new Date();
    this.Client_idClient = user.Client_idClient;
    this.admin = user.admin
};

User.create = function (newUser, result) {
    dbConn.query("INSERT INTO User set ?", newUser, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
User.findById = function (id, result) {
    dbConn.query("Select * from User where idUser = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.findByClientId = function (id, result) {
    dbConn.query("Select * from User where Client_idClient = ? ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.findByClientIdAndUnaffected = function (id, result) {
    dbConn.query("Select * from User where Client_idClient = ? OR admin = 9 ", id, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.findOne = function (username, result) {
    dbConn.query("Select * from User where username = ? ", username, function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.findAll = function (result) {
    dbConn.query("Select * from User Left JOIN Client ON User.Client_idClient = Client.idClient", function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.update = function (id, User, result) {
    dbConn.query("UPDATE User SET username=?,email=?,password=?,salt=?,admin=? WHERE idUser = ?", [User.username, User.email, User.password, User.salt, User.admin, id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

User.updateAdmin = function (id, User, result) {
    dbConn.query("UPDATE User SET admin=? WHERE idUser = ?", [User.admin, id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

User.setClientNull = function (id, result) {
    dbConn.query("UPDATE User SET Client_idClient= NULL WHERE idUser = ?", [id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

User.updateClient = function (id, User, result) {
    dbConn.query("UPDATE User SET Client_idClient=? WHERE idUser = ?", [User.Client_idClient, id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

User.delete = function (id, result) {
    dbConn.query("DELETE FROM User WHERE idUser = ?", [id], function (err, res) {
        if (err) {
            console.error("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = User;