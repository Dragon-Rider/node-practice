var events  = require('events'),
	emitter = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2){
	console.log(arguments);
	console.log(arguments[0], arguments[1]);
})
emitter.on('someEvent', function(arg1, arg2){
	console.log(arg1, arg2);
});

emitter.emit('someEvent', 'Eragon', '1991');

//emitter.emit('error');