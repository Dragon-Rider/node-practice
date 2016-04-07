var http = require('http'),
	util = require('util'),
	url = require('url');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);