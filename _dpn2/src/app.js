var noJS       = require('./components/global/no-js');
var experience = require('./components/experience');
var header     = require('./components/header');

noJS();

angular
  .module('resumeApp', [
    'experience',
    'header'
  ]);
