var request = require('request');
var express = require('express');
var hbs = require('express-hbs');
var fs = require('fs');

var app = express();

var port = process.env.PORT || 8080;

var defaultImage = fs.readFileSync('iowacodecamp-mobile/public/images/default.png');

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

app.get('/images/:imageId', function(req, res){
  if (!req.params.imageId || req.params.imageId == 'null') {
    res.set('Content-type', 'image/png`');
    return res.end(defaultImage);
  }
  request.get('http://iowacodecamp.com/public/images/speakers/' + req.params.imageId).pipe(res);
});

app.listen(port, function(){
  console.log('server running');
})
