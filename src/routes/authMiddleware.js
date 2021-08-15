module.exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource' });
    }
}

module.exports.isSiteAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user[0].admin==2) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin.' });
    }
}

module.exports.isClientAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user[0].admin==1) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin for this client.' });
    }
}

module.exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && (req.user[0].admin==1 || req.user[0].admin==2)) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin.' });
    }
}