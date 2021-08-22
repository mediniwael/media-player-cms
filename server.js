const express = require('express')
const app = express()
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
const dbConn = require('./config/db.config');
const passport = require('passport');
const server = require('http').createServer(app)
/*//const io = require('socket.io')(server, { cors: { origin: "*" } })
const cors = require('cors');
app.use(cors({
    origin: "http://localhost:4200",
    credentials: true    
}));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});*/


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
  cookie: { httpOnly: false, secure: 'auto', maxAge: 1000 * 60 * 60 * 24 }
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
app.use('/api', authenticationRoutes)

app.get('/', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.send('<h1>Home</h1><p> <a href="/logout">logout</a></p>');
  } else {
    res.send('<h1>Home</h1><p><a href="/register">register</a></p><p><a href="/login">login</a></p>');
  }
});

server.listen(5000, () => {
  console.log("server is running")
})
/*app.listen(5000, () => {
  console.log("server is running")
})*/