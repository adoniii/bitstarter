var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var result = fs.readFileSync('index.html','utf-8', function (err, data) {
	if (err) throw err;
	return new Buffer(data,'utf-8');
});
response.send(result);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
