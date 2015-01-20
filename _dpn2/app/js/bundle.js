(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var noJS       = require('./components/global/no-js');
var experience = require('./components/experience');
var header     = require('./components/header');

noJS();

angular
  .module('resumeApp', [
    'experience',
    'header'
  ]);

},{"./components/experience":4,"./components/global/no-js":5,"./components/header":8}],2:[function(require,module,exports){
module.exports = function experienceCtrl (experienceFactory) {
  var vm = this;

  experienceFactory
    .getWork()
    .then(function() {
      vm.work = experienceFactory.work;
    });
};

},{}],3:[function(require,module,exports){
module.exports = function ExperienceFactory ($http) {

  ExperienceFactory.work = [];

  ExperienceFactory.getWork = function getJobs () {
    return $http.get('app/api/experienceList.json')
      .success(function(data) {
        ExperienceFactory.work = data.work;
      })
      .error(function(error) {
        console.log(error);
      });
  };

  return ExperienceFactory;
};

},{}],4:[function(require,module,exports){
var ExperienceFactory = require('./experienceFactory');
var experienceCtrl    = require('./experienceCtrl');

angular
  .module('experience', [])
  .factory('ExperienceFactory', ExperienceFactory)
  .controller('experienceCtrl', experienceCtrl);

ExperienceFactory.$inject = ['$http'];
experienceCtrl.$inject    = ['ExperienceFactory'];



},{"./experienceCtrl":2,"./experienceFactory":3}],5:[function(require,module,exports){
module.exports = function noJS () {
  document.querySelector("html").classList.remove("no-js");
};

},{}],6:[function(require,module,exports){
module.exports = function headerCtrl (HeaderFactory) {
  var vm = this;

  HeaderFactory
    .getCurrentEvent()
    .then(function() {
      vm.currentEvent = HeaderFactory.currentEvent;
    });
};

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
var HeaderFactory = require('./headerFactory');
var headerCtrl    = require('./headerCtrl');

angular
  .module('header', [])
  .factory('HeaderFactory', HeaderFactory)
  .controller('headerCtrl', headerCtrl);

HeaderFactory.$inject = ['$http'];
headerCtrl.$inject    = ['HeaderFactory'];

},{"./headerCtrl":6,"./headerFactory":7}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2VDdHJsLmpzIiwic3JjL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlRmFjdG9yeS5qcyIsInNyYy9jb21wb25lbnRzL2V4cGVyaWVuY2UvaW5kZXguanMiLCJzcmMvY29tcG9uZW50cy9nbG9iYWwvbm8tanMvaW5kZXguanMiLCJzcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyQ3RybC5qcyIsInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJGYWN0b3J5LmpzIiwic3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG5vSlMgICAgICAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ2xvYmFsL25vLWpzJyk7XG52YXIgZXhwZXJpZW5jZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9leHBlcmllbmNlJyk7XG52YXIgaGVhZGVyICAgICA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9oZWFkZXInKTtcblxubm9KUygpO1xuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ3Jlc3VtZUFwcCcsIFtcbiAgICAnZXhwZXJpZW5jZScsXG4gICAgJ2hlYWRlcidcbiAgXSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cGVyaWVuY2VDdHJsIChleHBlcmllbmNlRmFjdG9yeSkge1xuICB2YXIgdm0gPSB0aGlzO1xuXG4gIGV4cGVyaWVuY2VGYWN0b3J5XG4gICAgLmdldFdvcmsoKVxuICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgdm0ud29yayA9IGV4cGVyaWVuY2VGYWN0b3J5Lndvcms7XG4gICAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBFeHBlcmllbmNlRmFjdG9yeSAoJGh0dHApIHtcblxuICBFeHBlcmllbmNlRmFjdG9yeS53b3JrID0gW107XG5cbiAgRXhwZXJpZW5jZUZhY3RvcnkuZ2V0V29yayA9IGZ1bmN0aW9uIGdldEpvYnMgKCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoJ2FwcC9hcGkvZXhwZXJpZW5jZUxpc3QuanNvbicpXG4gICAgICAuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIEV4cGVyaWVuY2VGYWN0b3J5LndvcmsgPSBkYXRhLndvcms7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBFeHBlcmllbmNlRmFjdG9yeTtcbn07XG4iLCJ2YXIgRXhwZXJpZW5jZUZhY3RvcnkgPSByZXF1aXJlKCcuL2V4cGVyaWVuY2VGYWN0b3J5Jyk7XG52YXIgZXhwZXJpZW5jZUN0cmwgICAgPSByZXF1aXJlKCcuL2V4cGVyaWVuY2VDdHJsJyk7XG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgnZXhwZXJpZW5jZScsIFtdKVxuICAuZmFjdG9yeSgnRXhwZXJpZW5jZUZhY3RvcnknLCBFeHBlcmllbmNlRmFjdG9yeSlcbiAgLmNvbnRyb2xsZXIoJ2V4cGVyaWVuY2VDdHJsJywgZXhwZXJpZW5jZUN0cmwpO1xuXG5FeHBlcmllbmNlRmFjdG9yeS4kaW5qZWN0ID0gWyckaHR0cCddO1xuZXhwZXJpZW5jZUN0cmwuJGluamVjdCAgICA9IFsnRXhwZXJpZW5jZUZhY3RvcnknXTtcblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vSlMgKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIik7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoZWFkZXJDdHJsIChIZWFkZXJGYWN0b3J5KSB7XG4gIHZhciB2bSA9IHRoaXM7XG5cbiAgSGVhZGVyRmFjdG9yeVxuICAgIC5nZXRDdXJyZW50RXZlbnQoKVxuICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgdm0uY3VycmVudEV2ZW50ID0gSGVhZGVyRmFjdG9yeS5jdXJyZW50RXZlbnQ7XG4gICAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBIZWFkZXJGYWN0b3J5ICgkaHR0cCkge1xuXG4gIEhlYWRlckZhY3RvcnkuY3VycmVudEV2ZW50ID0gXCJXb3Jrb25nIG9uIGEgc3VwZXItc2VjcmV0IHByb2plY3QuIFNoaGhoLlwiO1xuXG4gIEhlYWRlckZhY3RvcnkuZ2V0Q3VycmVudEV2ZW50ID0gZnVuY3Rpb24gZ2V0Q3VycmVudEV2ZW50ICgpIHtcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCdhcHAvYXBpL2V4cGVyaWVuY2VMaXN0Lmpzb24nKVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBIZWFkZXJGYWN0b3J5LmN1cnJlbnRFdmVudCA9IGRhdGEuY3VycmVudGx5O1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSGVhZGVyRmFjdG9yeTtcbn07XG4iLCJ2YXIgSGVhZGVyRmFjdG9yeSA9IHJlcXVpcmUoJy4vaGVhZGVyRmFjdG9yeScpO1xudmFyIGhlYWRlckN0cmwgICAgPSByZXF1aXJlKCcuL2hlYWRlckN0cmwnKTtcblxuYW5ndWxhclxuICAubW9kdWxlKCdoZWFkZXInLCBbXSlcbiAgLmZhY3RvcnkoJ0hlYWRlckZhY3RvcnknLCBIZWFkZXJGYWN0b3J5KVxuICAuY29udHJvbGxlcignaGVhZGVyQ3RybCcsIGhlYWRlckN0cmwpO1xuXG5IZWFkZXJGYWN0b3J5LiRpbmplY3QgPSBbJyRodHRwJ107XG5oZWFkZXJDdHJsLiRpbmplY3QgICAgPSBbJ0hlYWRlckZhY3RvcnknXTtcbiJdfQ==
