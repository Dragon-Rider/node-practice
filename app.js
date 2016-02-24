var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>This is a practice program.</h1>');
	res.end('Hello World :)');
}).listen(3000);

console.log('Http Server is listening at port 3000');