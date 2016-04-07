var http = require('http'),
	server = new http.Server();

server.on('request', function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<h1>Hello Eragon!<\h1>');
	res.end('<p>All data has been transmited.<\p>');
})

server.listen(3000);
console.log("HTTP server is listening at port 3000.");


