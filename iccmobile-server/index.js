var request = require('request');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/data', function(req, res){
  request.get('http://iowacodecamp.com/data/json', function(err, response, body){
    if (err) return res.status(500).end();
    res.set('Content-type', 'application/json');
    res.end(body);
  });
});

app.listen(process.env.NODE_PORT || 3000, function(){
  console.log('server running');
})
