var express = require('express');
var session = require('express-session')
var bodyParser = require('body-parser')
var cors = require('cors')
var uCont = require('./controllers/userCtrl.js')
var proCont = require('./controllers/profileCtrl.js')


var config = require('./config.js')

var app = express();

var corsOptions = {
	origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(session({
  secret: config.Secret,
  resave: true,
  saveUninitialized: true,

}));

app.get('/api/profiles', proCont.getFriendsProfiles);

app.post('/api/login', uCont.login);

var port = 3000;

app.listen( 3000, function(){
  console.log("listening on port " + port )
})
