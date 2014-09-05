var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    ts   = require('gulp-typescript');



// --------------- PATHS --------------- //
var inputs = {
  img:  'src/img/**/*',
  scss: 'src/scss/*.scss',
  ts:   'src/ts/*.ts'
};

var outputs = {
  css: 'app/css',
  img: 'app/img',
  js:  'app/js'
};



// --------------- TASKS --------------- //
gulp.task('scss', scssFn);
gulp.task('ts', tsFn);
gulp.task('default', defaultFn);



// --------------- TASK FUNCTIONS --------------- //
function scssFn() {
  gulp.src(inputs.scss)
      .pipe(sass({style: 'compressed'}))
      .pipe(gulp.dest(outputs.css))
};

function tsFn() {
  gulp.src(inputs.ts)
      .pipe(ts())
      .pipe(gulp.dest(outputs.js))
}

function defaultFn() {
  gulp.watch(inputs.ts, ['ts'])
  console.log ('Watching...');
}
