var noJS   = require('./modules/global/no-js');
var header = require('./modules/header');

noJS();

angular
  .module('resumeApp', [
    'header'
    ]);
