const express = require('express')
const app = express()
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
const dbConn = require('./config/db.config');
const passport = require('passport');
const server = require('http').createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);
const { eventEmitter1, emitDisplayChanges } = require('./src/middleware/midlleware')
const upload = require('express-fileupload')
const { mediaAccess } = require('./src/middleware/authMiddleware')

app.use(upload())
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

const userRoutes = require('./src/routes/user.routes')
const playlist_has_mediaRoutes = require('./src/routes/playlist_has_media.routes')
const playlistRoutes = require('./src/routes/playlist.routes')
const mediaRoutes = require('./src/routes/media.routes')
const maquetteRoutes = require('./src/routes/maquette.routes')
const colonneRoutes = require('./src/routes/colonne.routes')
const clientRoutes = require('./src/routes/client.routes')
const animationRoutes = require('./src/routes/animation.routes')
const affichageRoutes = require('./src/routes/affichage.routes')
const demandeRoutes = require('./src/routes/demande.routes')

app.use(emitDisplayChanges)

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.sockets.on('connection', function (socket) {
  socket.on('create', function (room) {
    socket.join(room);
    //console.log("rooms");
    //console.log(socket.rooms);
  });
});

eventEmitter1.on("changes detected", (room) => {
  io.to(room).emit("changes detected")
})

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/phm', playlist_has_mediaRoutes)
app.use('/api/v1/playlists', playlistRoutes)
app.use('/api/v1/medias', mediaRoutes)
app.use('/api/v1/maquettes', maquetteRoutes)
app.use('/api/v1/colonnes', colonneRoutes)
app.use('/api/v1/animations', animationRoutes)
app.use('/api/v1/affichages', affichageRoutes)
app.use('/api/v1/clients', clientRoutes)
app.use('/api/v1/demandes', demandeRoutes)

const authenticationRoutes = require('./src/routes/authentication.routes');
app.use('/api', authenticationRoutes)

app.get('/video/:cl/:video', mediaAccess, (req, res) => {
  res.sendFile(__dirname + '/resources/videos/' + req.params.cl + '/' + req.params.video)
})

app.get('/image/:cl/:image', mediaAccess, (req, res) => {
  res.sendFile(__dirname + '/resources/images/' + req.params.cl + '/' + req.params.image)
})

app.get('/affichage/:cl/:room', mediaAccess, (req, res) => {
  res.sendFile(__dirname + '/resources/mediaplayer/index.html')
})

server.listen(5000, () => {
  console.log("server is running")
})
