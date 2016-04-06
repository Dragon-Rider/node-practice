var http = require('http'),
	fs = require('fs'),
	express = require('express'),
	Route = require('./routes'),
	routes = new Route(),    //需要实例化返回的对象，才能调用实例里的函数
	app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	errorHandler = require('errorhandler'),
	util = require('util');

/*读取ejs模版，并将模版和数据拼在一起
str = fs.readFileSync(__dirname + '/views/index.ejs', 'utf8');
var ret = ejs.render(str, {
	names: ['foo', 'bar', 'baz'],
	title: "Eragon"
});
console.log(ret);*/

//读取文件夹html的目录
fs.readdir(__dirname + '/html', function(err, files) {
	console.log(files);
})


// Configuration
//设置了模板引擎和页面模板的位置
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(methodOverride());

//配置静态文件服务器
app.use(express.static(__dirname + '/public'));

if ('development' == app.get('env')) {
	app.use(errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
}

if ('production' == app.get('env')) {
	app.use(errorHandler());
}

//注册静态视图助手inspect，在ejs模板里可以调用(Note:app.helpers已弃用）
app.locals.inspect = function(obj){  
	//console.log(obj)
    return util.inspect(obj, true);  
}  

//注册动态视图助手headers，在ejs模板里可以调用(Note:app.dynamicHelpers已弃用）
app.use(function(req, res, next){
	res.locals.headers = req.headers;
	
	next();
});

// Routes
app.get('/', routes.index);
app.get('/hello', routes.hello)
app.get('/user/:username', function(req, res) {
	res.send('user: ' + req.params.username);
});
app.get('/list', routes.list);
app.get('/headers', routes.headers);

app.listen(3000);

//底层方法启服务
/*http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<h1>Node.js</h1>');
	res.end('<p>Hello World</p>');
}).listen(3000);


console.log("HTTP server is listening at port 3000.");*/