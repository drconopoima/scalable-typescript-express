const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('send_message', function() {
  console.log('Hello event world!');
});
const connectHandler = function connected() {
  console.log('Connection is created');
  eventEmitter.emit('send_message');
};
eventEmitter.on('connection', connectHandler);
eventEmitter.emit('connection');
console.log('Finish');
