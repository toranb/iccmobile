var request = require('request');
var express = require('express');
var compression = require('compression');
var fs = require('fs');

var app = express();

var port = process.env.PORT || 8080;

var defaultImage = fs.readFileSync(__dirname + '/../iowacodecamp-mobile/public/images/default.png');

app.use(compression());
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
  request.get('http://iowacodecamp.com/public/images/speakers/' + req.params.imageId, function(err, response, body){
    if (response && response.statusCode === 200) {
      res.setHeader('Content-Type', response.headers['content-type']);
      res.set('Content-type', response.headers['content-type']);
      res.send(response);
    }else{
      res.set('Content-type', 'image/png');
      return res.end(defaultImage);
    }
  });
});

app.listen(port, function(){
  console.log('server running');
})
