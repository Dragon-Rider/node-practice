var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200,{"content-type":"text-html"});
	res.write("<h1>Hello Eragon!</h1>");
	res.end("<p>This is end</p>");
}).listen(3000);

console.log("This is a practice program about how to use HTTP sever.")