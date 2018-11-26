# [gulp](http://gulpjs.com)-loopback-sdk-angular [![Build Status](https://travis-ci.org/zimlin/gulp-loopback-sdk-angular.svg?branch=master)](https://travis-ci.org/zimlin/gulp-loopback-sdk-angular)

> gulp plugin for auto-generating Angular $resource services for LoopBack.
> This is a port of the Grunt plugin [here](https://github.com/strongloop/grunt-loopback-sdk-angular)

This module is in Active LTS mode, new features are no longer accepted.
(See [Module Long Term Support Policy](#module-long-term-support-policy) below.)
LoopBack 3 users looking for new features are encouraged to upgrade to LoopBack 4. Refer to [loopback-next#1849](https://github.com/strongloop/loopback-next/issues/1849) for more information on how to upgrade.

## Install

```sh
$ npm install --save-dev gulp-loopback-sdk-angular
```


## Usage

```js
var gulp = require('gulp');
var rename = require('gulp-rename');
var loopbackAngular = require('gulp-loopback-sdk-angular');

gulp.task('default', function () {
	return gulp.src('./server/app.js')
    .pipe(loopbackAngular())
    .pipe(rename('lb-services.js'))
    .pipe(gulp.dest('./client/js'));
});
```


## API

### loopbackAngular(options)

#### options

##### options.ngModuleName

Type: `String`
Default: `lbServices`

Name for the generated AngularJS module.

##### options.apiUrl

Type: `String`
Default: The value configured in the LoopBack application via app.set('restApiRoot') or `/api`

## Everything Else

http://docs.strongloop.com/display/LB/AngularJS+JavaScript+SDK


## License

MIT © [Zi Ming Lin](https://github.com/zimlin)

## Module Long Term Support Policy

This module adopts the [Module Long Term Support (LTS)](http://github.com/CloudNativeJS/ModuleLTS) policy, with the following End Of Life (EOL) dates:

| Version | Status          | Published | EOL      |
| ------- | --------------- | --------- | -------- |
| 1.x     | Active LTS      | Jun 2018  | Dec 2019 |

Learn more about our LTS plan in the [docs](https://loopback.io/doc/en/contrib/Long-term-support.html).