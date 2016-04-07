var http = require('http'),
	util = require('util'),
	queryString = require('querystring'),
	url = require('url');

http.createServer(function(serverReq, serverRes) {
	serverRes.writeHead(200, {
		'Content-Type': 'text/html'
	});

	//console.log(serverReq.url);

	serverRes.end(util.inspect(url.parse(serverReq.url, true).query))
}).listen(3001);

var options = {
	host: 'localhost',
	port:'3001'
};

var clientReq = http.get(options, function(clientRes) {
	clientRes.setEncoding('utf8');
	clientRes.on('data', function(data) {
		console.log(data);
	})
})
