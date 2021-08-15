const express = require('express')
const app = express()
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
const dbConn = require('./config/db.config');
const passport = require('passport');

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(express.static('./public'));


require('./config/passport.config')


const sessionStore = new MySQLStore({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
  charset: 'utf8mb4_bin',
}, dbConn);

app.use(session({
  secret: 'random secret',
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: { secure: 'auto' , maxAge: 1000*60*60*24}
}))

app.use(passport.initialize())
app.use(passport.session())


/*app.get('/', (req, res) => {
  res.status(200).send('Hello');
});*/

// Require user routes
const userRoutes = require('./src/routes/user.routes')
const playlist_has_mediaRoutes = require('./src/routes/playlist_has_media.routes')
const playlistRoutes = require('./src/routes/playlist.routes')
const mediaRoutes = require('./src/routes/media.routes')
const maquetteRoutes = require('./src/routes/maquette.routes')
const colonneRoutes = require('./src/routes/colonne.routes')
const clientRoutes = require('./src/routes/client.routes')
const animationRoutes = require('./src/routes/animation.routes')
const affichageRoutes = require('./src/routes/affichage.routes')

// using as middleware
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/phm', playlist_has_mediaRoutes)
app.use('/api/v1/playlists', playlistRoutes)
app.use('/api/v1/medias', mediaRoutes)
app.use('/api/v1/maquettes', maquetteRoutes)
app.use('/api/v1/colonnes', colonneRoutes)
app.use('/api/v1/animations', animationRoutes)
app.use('/api/v1/affichages', affichageRoutes)
app.use('/api/v1/clients', clientRoutes)

const authenticationRoutes = require('./src/routes/authentication.routes');

app.use('/', authenticationRoutes)

app.listen(5000, () => {
  console.log("server is running")
})