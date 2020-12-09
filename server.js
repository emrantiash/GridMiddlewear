var express = require("express");
var bodyParser = require("body-parser");
const path = require('path');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes');
const {PORT} = require('./configure')

var server = app.listen(PORT,listening);



app.use(function(req, response, next) {
response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Credentials", "true");
response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

function listening(){   
    console.log(" server is running at "+server.address().port)  ;     
}

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'website/smartGridSyestem')));






