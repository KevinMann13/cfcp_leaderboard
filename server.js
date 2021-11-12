const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session')

app = express();

app.use(require('cors')());

const api = require("./api/api")
const passportConfig = require('./api/config/passport');

var sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: true, 
    saveUninitialized: true
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'frontend/dist/cfcp')))

const port = process.env.PORT || "3000"
app.set('port', port);

app.use('/api', api)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist/cfcp/index.html"))
})

const db = require('./api/config/db.config');
db.sequelize.sync();

const server = http.createServer(app)

server.listen(port, () => console.log(`Running on localhost:${port}`))

module.exports = { app }