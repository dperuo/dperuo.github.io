var ExperienceFactory   = require('./experienceFactory');
var experienceCtrl      = require('./experienceCtrl');
var experienceDirective = require('./experienceDirective');

angular
  .module('experience', [])
  .factory('ExperienceFactory', ExperienceFactory)
  .directive('experienceList', experienceDirective)
  .controller('experienceCtrl', experienceCtrl);

ExperienceFactory.$inject = ['$http'];
experienceCtrl.$inject    = ['ExperienceFactory'];


