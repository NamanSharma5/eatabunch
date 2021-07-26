
const express = require('express');
const app = express();

app.use(express.static(__dirname));

require('dotenv').config()

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"))

//app.use(require('morgan')('combined')); -logging software

const bodyParser = require('body-parser');
const expressSession = require('express-session')({
  secret: 'blah3blah2blah1',
  resave: false,
  saveUninitialized: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"))


app.get('/',
  function(req, res) {
    res.render('index');
});


app.use(express.static('public')); // middleware for registration



const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ' + port));

