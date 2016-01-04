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
    console.log('Published', packet);
    console.log('Client', client);
  });

})();