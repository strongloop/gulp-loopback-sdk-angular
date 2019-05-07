// Copyright IBM Corp. 2014,2018. All Rights Reserved.
// Node module: gulp-loopback-sdk-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var loopback = require('loopback');
var app = loopback();

// Setup default datasources for autoAttach()
app.dataSource('db', { connector: 'memory'});

// Configure REST API path
app.set('restApiRoot', '/rest-api-root');

module.exports = app;
