
const express = require('express');
const mustacheExpress = require('mustache-express');
const models = require('./models');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');


app.get('/', function(req, res){

//findAll returns an array so we need to loop over it
  models.Movie.findAll().then(function(movies){
    res.render('index', {model: movies});
  });


});

app.listen(3000);
