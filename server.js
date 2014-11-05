var express = require('express');
var app = express();

//public folder to serve static assets
app.use(express.static(__dirname + '/public'));

//route to index.html
app.get('*', function(req, res){
	res.sendfile('./public/views/index.html');
});

app.listen(8080);
console.log('Magic happens on port 8080');

