var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': "text/html"});
	res.write('<h1>Eragon</h1>');
	res.end('<p>Welcome Eragon!</p>')
}).listen(3001);

console.log('start the server!');