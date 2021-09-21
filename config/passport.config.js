const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../src/models/user.model')
const validPassword = require('../lib/passwordUtils').validPassword;

const verifyCallback = (username, password, done) => {
    User.findOne(username, function (err, user) {
        try {
            user = new User(user[0])

            if (err)
                done(err);
            if (!user) { return done(null, false) }
            const isValid = validPassword(password, user.password, user.salt);
            if (isValid) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (er) {
            done(err);
        }
    });
}

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.idUser);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId, function (err, user) {
        if (err)
            done(err)
        done(null, user);
    });
});