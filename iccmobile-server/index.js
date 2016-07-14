var request = require('request');
var express = require('express');
var hbs = require('express-hbs');

var app = express();

var port = process.env.PORT || 8080;

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  request.get('http://iowacodecamp.com/data/json', function(err, response, body){
    // if (err) return res.status(500).end();
    // res.end(body);
    res.render('index', {
      body: body
    });
  });
});

app.listen(port, function(){
  console.log('server running');
})
