var events  = require("events");
var emitter = new events.EventEmitter; 

emitter.on('someEvent', function(){
	console.log(1);
})

emitter.on('someEvent', function(){
	console.log(2);
})

emitter.emit('someEvent');