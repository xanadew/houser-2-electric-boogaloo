const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      massive = require('massive'),
      cors = require('cors');
require('dotenv').config();
const checkForSesh = require('./middlewares/checkForSesh'),
      authCtlr = require('./controllers/authController'),
      propCtlr = require('./controllers/propController');

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET
} = process.env;
// const port = SERVER_PORT;

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(checkForSesh);
// authpointz
app.post('/api/auth/login', authCtlr.login);
app.post('/api/auth/register', authCtlr.register);
app.post('/api/auth/logout', authCtlr.logout);
// propointz
app.post('/api/houses', propCtlr.conjure);
app.get('/api/houses', propCtlr.retrieve);
app.delete('/api/houses/:id', propCtlr.banish);

massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
    app.listen(SERVER_PORT, () => console.log(`IT/'S OVER ${SERVER_PORT}!!!`))
})