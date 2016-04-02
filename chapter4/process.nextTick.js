 //NOTE:process.nextTick在新版的node里已经弃用了，改用setImmediate了

var http = require('http');
var wait = function (mils) {
    var now = new Date;
    while (new Date - now <= mils);
};
function compute() {
    // performs complicated calculations continuously
    console.log('start computing');
    wait(1000);
    console.log('working for 1s, nexttick');
    setImmediate(compute);    
    /*process.nextTick(compute) //process.nextTick已经失效,这种写法会照成http服务器没有响应*/
}
http.createServer(function (req, res) {
    console.log('new request');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Eragon');
}).listen(3002);
compute();