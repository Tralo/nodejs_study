var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
	console.log("listen1",arg1,arg2);
});
emitter.on('someEvent',function(arg1,arg2){
	console.log('listen2',arg1,arg2);
});

emitter.emit('someEvent','droid',1994);

