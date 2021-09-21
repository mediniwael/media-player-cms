const crypto = require('crypto');

//valide si le mot de passe en parametre et le hash enregistrer dan la base de donnee sont equvalent
function validPassword(password, hash, salt) {
    var hashVerify = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex')
    return hash === hashVerify
}

//genere le hash du mot de passe depuit un salt aleatoire et les rertourne pour etre enregistrer da ns la base
function genPassword(password) {
    var salt = crypto.randomBytes(32).toString('hex')
    var genHash  = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex')

    return {
        salt: salt,
        hash: genHash
    }
}

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;