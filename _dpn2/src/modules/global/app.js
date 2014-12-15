var noJS    = require('./no-js');
var header = require('../header');

noJS();

angular
  .module('resumeApp', [
    'header'
    ]);
