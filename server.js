const express = 		require('express');
const exphbs = 			require('express-handlebars')
const bodyParser = 		require('body-parser');
const methodOverride =  require('method-override');

var app = express();
var port = 3000;
var routes = require('./controllers/burgers_controllers.js')

//set static content dir
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
	defaultLayout: "main"
}));

//render handlebars
app.set('view engine', 'handlebars');
app.use('/', routes);

app.listen(port);