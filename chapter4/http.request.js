var http = require('http'),
	querystring = require('querystring'),
	util = require('util');


/*启服务*/
http.createServer(function(serverReq, serverRes) {
	var post = '';
	serverReq.on('data', function(chunk) {
		post += chunk;
	});
	serverReq.on('end', function() {

		//server接收到的数据
		post = querystring.parse(post);
		console.log('服务器收到post的数据:');
		console.log(post);
		//serverRes.end(util.inspect(post));
		serverRes.end('已接受到数据，这里是服务器返回的数据:P');
	});
}).listen(3000);


/*发送post请求*/
var contents = querystring.stringify({
	name: 'Eragon',
	email: '278362241@qq.com',
	address: 'University of Science and Techology of China'
});

/*querystring.stringify方法将对象拼接成字符串
console.log(contents);
console.log(contents.length);*/

var options = {
	host: 'localhost',
	port:'3000',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': contents.length
	}
};

var clientReq = http.request(options, function(clientRes) {
	clientRes.setEncoding('utf8');
	clientRes.on('data', function(data) {
		console.log(data);
	})
})

//client发送数据
clientReq.write(contents);
clientReq.end();