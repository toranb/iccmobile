var request = require('request');
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

var port = process.env.PORT || 8080;

var defaultImage = fs.readFileSync(__dirname + '/../iowacodecamp-mobile/public/images/default.png');

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/sessions', function(req, res) {
  request.get('http://iowacodecamp.com/data/json', function(err, response, body){
    res.setHeader('Content-Type', 'application/json');
    res.send(body);
  });
});

app.get('/images/:imageId', function(req, res){
  if (!req.params.imageId || req.params.imageId == 'null') {
    res.set('Content-type', 'image/png');
    return res.end(defaultImage);
  }
  request.get('http://iowacodecamp.com/public/images/speakers/' + req.params.imageId).pipe(res);
});

var ratings = {};
app.get('/api/reviews', function(req, res) {
  return res.json(ratings);
});

app.post('/api/reviews/:uuid/:sessionId', function(req, res){
  var rating = null;
  var uuid = req.params.uuid;
  var sessionId = req.params.sessionId;

  try {
    rating = parseInt(req.body.rating, 10);
  } catch(e) {
    console.log('error: invalid rating value');
  }

  if (!rating || (!uuid || uuid == 'null') || (!sessionId || sessionId == 'null')) {
    res.status(400);
    return res.json({ 'error': 'invalid' });
  }

  var theRatings = ratings[uuid] || {};
  if (Object.keys(theRatings).length === 0) {
    ratings[uuid] = { [sessionId]: rating };
  }else{
    ratings[uuid][sessionId] = rating;
  }
  return res.json({ 'success': 'valid' });
});

app.listen(port, function(){
  console.log('server running');
})
