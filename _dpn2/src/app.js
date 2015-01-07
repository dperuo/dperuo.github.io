var noJS   = require('./components/global/no-js');
var header = require('./components/header');

noJS();

angular
  .module('resumeApp', [
    'header'
    ]);
