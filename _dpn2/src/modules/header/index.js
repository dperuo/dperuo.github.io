var headerFactory = require('./headerFactory');
var headerCtrl    = require('./headerCtrl');

angular
  .module('header', [])
  .factory('headerFactory', headerFactory)
  .controller('headerCtrl', headerCtrl);

headerFactory.$inject = ['$http'];
headerCtrl.$inject    = ['headerFactory'];
