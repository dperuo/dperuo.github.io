/** @jsx React.DOM */

var noJS       = require('./components/global/no-js');
var experience = require('./components/experience');
var header     = require('./components/header');
// var skills     = require('./components/skills');

noJS();

// skills();

angular
  .module('resumeApp', [
    'experience',
    'header'
  ]);
