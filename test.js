'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var loopbackAngular = require('./index');
var fs = require('fs');

it('should ', function (cb) {
  var stream = loopbackAngular();

  stream.on('data', function (file) {
    assert.equal(
      file.contents.length,
      fs.statSync('fixtures/lb-services.js').size
    );
    assert(/var urlBase = "\/rest-api-root";/.test(file.contents));
    assert(/var module = angular.module\("lbServices", \['ngResource'\]\);/
      .test(file.contents));
  });

  stream.on('end', cb);

  stream.write(new gutil.File({
    base: __dirname,
    path: __dirname + '/fixtures/app.js',
    contents: fs.readFileSync('fixtures/app.js')
  }));

  stream.end();
});
