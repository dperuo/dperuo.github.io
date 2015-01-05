(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var noJS   = require('./modules/global/no-js');
var header = require('./modules/header');

noJS();

angular
  .module('resumeApp', [
    'header'
    ]);

},{"./modules/global/no-js":2,"./modules/header":5}],2:[function(require,module,exports){
module.exports = noJS;

function noJS () {
  document.querySelector("html").classList.remove("no-js");
}

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
    return $http.get('../api/experienceList.json')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvbW9kdWxlcy9nbG9iYWwvbm8tanMvaW5kZXguanMiLCJzcmMvbW9kdWxlcy9oZWFkZXIvaGVhZGVyQ3RybC5qcyIsInNyYy9tb2R1bGVzL2hlYWRlci9oZWFkZXJGYWN0b3J5LmpzIiwic3JjL21vZHVsZXMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG5vSlMgICA9IHJlcXVpcmUoJy4vbW9kdWxlcy9nbG9iYWwvbm8tanMnKTtcbnZhciBoZWFkZXIgPSByZXF1aXJlKCcuL21vZHVsZXMvaGVhZGVyJyk7XG5cbm5vSlMoKTtcblxuYW5ndWxhclxuICAubW9kdWxlKCdyZXN1bWVBcHAnLCBbXG4gICAgJ2hlYWRlcidcbiAgICBdKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbm9KUztcblxuZnVuY3Rpb24gbm9KUyAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1qc1wiKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGVhZGVyQ3RybCAoSGVhZGVyRmFjdG9yeSkge1xuICB2YXIgdm0gPSB0aGlzO1xuXG4gIEhlYWRlckZhY3RvcnlcbiAgICAuZ2V0Q3VycmVudEV2ZW50KClcbiAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIHZtLmN1cnJlbnRFdmVudCA9IEhlYWRlckZhY3RvcnkuY3VycmVudEV2ZW50O1xuICAgIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gSGVhZGVyRmFjdG9yeSAoJGh0dHApIHtcblxuICBIZWFkZXJGYWN0b3J5LmN1cnJlbnRFdmVudCA9IFwiV29ya29uZyBvbiBhIHN1cGVyLXNlY3JldCBwcm9qZWN0LiBTaGhoaC5cIjtcblxuICBIZWFkZXJGYWN0b3J5LmdldEN1cnJlbnRFdmVudCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRFdmVudCAoKSB7XG4gICAgcmV0dXJuICRodHRwLmdldCgnLi4vYXBpL2V4cGVyaWVuY2VMaXN0Lmpzb24nKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBIZWFkZXJGYWN0b3J5LmN1cnJlbnRFdmVudCA9IGRhdGEuY3VycmVudGx5O1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSGVhZGVyRmFjdG9yeTtcbn07XG4iLCJ2YXIgSGVhZGVyRmFjdG9yeSA9IHJlcXVpcmUoJy4vaGVhZGVyRmFjdG9yeScpO1xudmFyIGhlYWRlckN0cmwgICAgPSByZXF1aXJlKCcuL2hlYWRlckN0cmwnKTtcblxuYW5ndWxhclxuICAubW9kdWxlKCdoZWFkZXInLCBbXSlcbiAgLmZhY3RvcnkoJ0hlYWRlckZhY3RvcnknLCBIZWFkZXJGYWN0b3J5KVxuICAuY29udHJvbGxlcignaGVhZGVyQ3RybCcsIGhlYWRlckN0cmwpO1xuXG5IZWFkZXJGYWN0b3J5LiRpbmplY3QgPSBbJyRodHRwJ107XG5oZWFkZXJDdHJsLiRpbmplY3QgICAgPSBbJ0hlYWRlckZhY3RvcnknXTtcbiJdfQ==
