var ExperienceFactory = require('./experienceFactory');
var experienceCtrl    = require('./experienceCtrl');

angular
  .module('experience', [])
  .factory('ExperienceFactory', ExperienceFactory)
  .controller('experienceCtrl', experienceCtrl);

ExperienceFactory.$inject = ['$http'];
experienceCtrl.$inject    = ['ExperienceFactory'];


