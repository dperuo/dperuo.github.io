(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var noJS   = require('./components/global/no-js');
var header = require('./components/header');

noJS();

angular
  .module('resumeApp', [
    'header'
    ]);

},{"./components/global/no-js":2,"./components/header":5}],2:[function(require,module,exports){
module.exports = function noJS () {
  document.querySelector("html").classList.remove("no-js");
};

},{}],3:[function(require,module,exports){
module.exports = function headerCtrl (HeaderFactory) {
  var vm = this;

  HeaderFactory
    .getCurrentEvent()
    .then(function() {
      vm.currentEvent = HeaderFactory.currentEvent;
    });
};

},{}],4:[function(require,module,exports){
module.exports = function HeaderFactory ($http) {

  HeaderFactory.currentEvent = "Workong on a super-secret project. Shhhh.";

  HeaderFactory.getCurrentEvent = function getCurrentEvent () {
    return $http.get('app/api/experienceList.json')
      .success(function(data) {
        HeaderFactory.currentEvent = data.currently;
      })
      .error(function(error) {
        console.log(error);
      });
  };

  return HeaderFactory;
};

},{}],5:[function(require,module,exports){
var HeaderFactory = require('./headerFactory');
var headerCtrl    = require('./headerCtrl');

angular
  .module('header', [])
  .factory('HeaderFactory', HeaderFactory)
  .controller('headerCtrl', headerCtrl);

HeaderFactory.$inject = ['$http'];
headerCtrl.$inject    = ['HeaderFactory'];

},{"./headerCtrl":3,"./headerFactory":4}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvY29tcG9uZW50cy9nbG9iYWwvbm8tanMvaW5kZXguanMiLCJzcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyQ3RybC5qcyIsInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJGYWN0b3J5LmpzIiwic3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbm9KUyAgID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2dsb2JhbC9uby1qcycpO1xudmFyIGhlYWRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9oZWFkZXInKTtcblxubm9KUygpO1xuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ3Jlc3VtZUFwcCcsIFtcbiAgICAnaGVhZGVyJ1xuICAgIF0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub0pTICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWpzXCIpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGVhZGVyQ3RybCAoSGVhZGVyRmFjdG9yeSkge1xuICB2YXIgdm0gPSB0aGlzO1xuXG4gIEhlYWRlckZhY3RvcnlcbiAgICAuZ2V0Q3VycmVudEV2ZW50KClcbiAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIHZtLmN1cnJlbnRFdmVudCA9IEhlYWRlckZhY3RvcnkuY3VycmVudEV2ZW50O1xuICAgIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gSGVhZGVyRmFjdG9yeSAoJGh0dHApIHtcblxuICBIZWFkZXJGYWN0b3J5LmN1cnJlbnRFdmVudCA9IFwiV29ya29uZyBvbiBhIHN1cGVyLXNlY3JldCBwcm9qZWN0LiBTaGhoaC5cIjtcblxuICBIZWFkZXJGYWN0b3J5LmdldEN1cnJlbnRFdmVudCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRFdmVudCAoKSB7XG4gICAgcmV0dXJuICRodHRwLmdldCgnYXBwL2FwaS9leHBlcmllbmNlTGlzdC5qc29uJylcbiAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgSGVhZGVyRmFjdG9yeS5jdXJyZW50RXZlbnQgPSBkYXRhLmN1cnJlbnRseTtcbiAgICAgIH0pXG4gICAgICAuZXJyb3IoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEhlYWRlckZhY3Rvcnk7XG59O1xuIiwidmFyIEhlYWRlckZhY3RvcnkgPSByZXF1aXJlKCcuL2hlYWRlckZhY3RvcnknKTtcbnZhciBoZWFkZXJDdHJsICAgID0gcmVxdWlyZSgnLi9oZWFkZXJDdHJsJyk7XG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgnaGVhZGVyJywgW10pXG4gIC5mYWN0b3J5KCdIZWFkZXJGYWN0b3J5JywgSGVhZGVyRmFjdG9yeSlcbiAgLmNvbnRyb2xsZXIoJ2hlYWRlckN0cmwnLCBoZWFkZXJDdHJsKTtcblxuSGVhZGVyRmFjdG9yeS4kaW5qZWN0ID0gWyckaHR0cCddO1xuaGVhZGVyQ3RybC4kaW5qZWN0ICAgID0gWydIZWFkZXJGYWN0b3J5J107XG4iXX0=
