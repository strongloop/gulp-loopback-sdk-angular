var loopback = require('loopback');
var app = loopback();

// Setup default datasources for autoAttach()
app.dataSource('db', { connector: 'memory'});

// Configure REST API path
app.set('restApiRoot', '/rest-api-root');

module.exports = app;
