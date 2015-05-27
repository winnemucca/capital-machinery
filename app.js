var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var indexController = require('./controllers/index.js');
var app = express();

var swig = require('swig');
swig = new swig.Swig();
app.engine('html',swig.renderFile);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/models', indexController.models);

app.get('/products',indexController.products);

app.get('/aggregate',indexController.aggregate);

app.get('/washyEquip',indexController.washyEquip);

app.get('/capital',indexController.capital);

app.get('/screeners&scrubbers',indexController.screenersScrubbers);

app.get('/core-crushers',indexController.coreCrushers);

app.get('/washy-plants&DewaterEquipment',indexController.washyPlantsDewater);

app.get('/bucketSystems',indexController.bucketSystems);
app.get('/contactUs',indexController.contactUs);

app.get('/investors',indexController.investors);
app.get('/about',indexController.about);
app.get('/newspage',indexController.newsPage);
app.get('/financing',indexController.financing);

var port = process.env.PORT || 3261;

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});

