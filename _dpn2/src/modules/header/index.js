var HeaderFactory = require('./headerFactory');
var headerCtrl    = require('./headerCtrl');

angular
  .module('header', [])
  .factory('HeaderFactory', HeaderFactory)
  .controller('headerCtrl', headerCtrl);

HeaderFactory.$inject = ['$http'];
headerCtrl.$inject    = ['HeaderFactory'];
