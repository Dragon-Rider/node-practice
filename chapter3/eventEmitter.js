var EventEmitter = require('events').EventEmitter,
	emitter = new EventEmitter();

emitter.on('some_event', function() {
	console.log('some event has occured!');
});

setTimeout(function() {
	emitter.emit('some_event');
}, 1000);