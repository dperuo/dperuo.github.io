var gulp = require('gulp');

var buildCSS     = require('./util/build-css');
var buildDefault = require('./util/build-default');
var buildJS      = require('./util/build-js');

gulp.task('css', buildCSS);
gulp.task('js', buildJS);
gulp.task('default', buildDefault);
