(function () {
  const mosca = require('mosca');

  const ascoltatore = {
    type: 'mongo',
    url: 'mongodb://localhost:27017/mqtt',
    pubsubCollection: 'ascoltatori',
    mongo: {}
  };

  const settings = {
    port: 1883,
    backend: ascoltatore,
    persistence: {
      factory: mosca.persistence.Mongo,
      url: 'mongodb://localhost:27017/mqtt'
    }
  };

  var server = new mosca.Server(settings);
  server.on('ready', setup);

  var clients = [];

  // fired when a client connects
  server.on('clientConnected', function(client) {
    console.log('Client Connected', client.id);
    clients.push(client);
  });

  // fired when a client disconnects
  server.on('clientDisconnected', function(client) {
    console.log('Client Disconnected:', client.id);
  });

  // fired when a message is published
  server.on('published', function(packet, client) {
    console.log('Published payload', packet.payload.toString('utf8'));
    //console.log('Published', packet);
    //console.log('Client', client);
  });

  // fired when the mqtt server is ready
  function setup() {
    console.log('Mosca server is up and running');
  }

  // Sending data from mosca to clients:
  var message = {
    topic: '/hello/',
    payload: 'DUMMY_MESSAGE!', // or a Buffer
    qos: 0, // 0, 1, or 2
    retain: false // or true
  };

  // Sending data from mosca to clients:
  var message2 = {
    topic: '/hello/world/all',
    payload: 'SECOND_DUMMY_MESSAGE!', // or a Buffer
    qos: 0, // 0, 1, or 2
    retain: false // or true
  };

  // Sending data from mosca to clients:
  var message3 = {
    topic: '/things',
    payload: 'YOU WONT_SEE_THIS!', // or a Buffer
    qos: 0, // 0, 1, or 2
    retain: false // or true
  };

  setTimeout(function () {
    server.publish(message, function() {
      console.log('PUBLISHED!!!!!!!!');
    });
  }, 10000);

  setTimeout(function () {
    server.publish(message2, function() {
      console.log('PUBLISHED AGAIN!!!!!!!!');
    });
  }, 20000);

  setTimeout(function () {
    server.publish(message3, function() {
      console.log('PUBLISHED THINGS!!!!!!!!');
    });
  }, 30000);

})();