(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var noJS   = require('./no-js');
var header = require('../header');

noJS();

angular
  .module('resumeApp', [
    'header'
    ]);

},{"../header":5,"./no-js":2}],2:[function(require,module,exports){
module.exports = noJS;

function noJS () {
  document.querySelector("html").classList.remove("no-js");
}

},{}],3:[function(require,module,exports){
module.exports = function headerCtrl (headerFactory) {
  var vm = this;

  vm.currentEvent = headerFactory.currentEvent;
};

},{}],4:[function(require,module,exports){
module.exports = function headerFactory () {
  return {
    currentEvent: "things and stuff..."
  };
};

},{}],5:[function(require,module,exports){
var headerFactory = require('./headerFactory');
var headerCtrl    = require('./headerCtrl');

angular
  .module('header', [])
  .factory('headerFactory', headerFactory)
  .controller('headerCtrl', headerCtrl);

headerFactory.$inject = ['$http'];
headerCtrl.$inject    = ['headerFactory'];

},{"./headerCtrl":3,"./headerFactory":4}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9tb2R1bGVzL2dsb2JhbC9hcHAuanMiLCJzcmMvbW9kdWxlcy9nbG9iYWwvbm8tanMvaW5kZXguanMiLCJzcmMvbW9kdWxlcy9oZWFkZXIvaGVhZGVyQ3RybC5qcyIsInNyYy9tb2R1bGVzL2hlYWRlci9oZWFkZXJGYWN0b3J5LmpzIiwic3JjL21vZHVsZXMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbm9KUyAgID0gcmVxdWlyZSgnLi9uby1qcycpO1xudmFyIGhlYWRlciA9IHJlcXVpcmUoJy4uL2hlYWRlcicpO1xuXG5ub0pTKCk7XG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgncmVzdW1lQXBwJywgW1xuICAgICdoZWFkZXInXG4gICAgXSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG5vSlM7XG5cbmZ1bmN0aW9uIG5vSlMgKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIik7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhlYWRlckN0cmwgKGhlYWRlckZhY3RvcnkpIHtcbiAgdmFyIHZtID0gdGhpcztcblxuICB2bS5jdXJyZW50RXZlbnQgPSBoZWFkZXJGYWN0b3J5LmN1cnJlbnRFdmVudDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhlYWRlckZhY3RvcnkgKCkge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRFdmVudDogXCJ0aGluZ3MgYW5kIHN0dWZmLi4uXCJcbiAgfTtcbn07XG4iLCJ2YXIgaGVhZGVyRmFjdG9yeSA9IHJlcXVpcmUoJy4vaGVhZGVyRmFjdG9yeScpO1xudmFyIGhlYWRlckN0cmwgICAgPSByZXF1aXJlKCcuL2hlYWRlckN0cmwnKTtcblxuYW5ndWxhclxuICAubW9kdWxlKCdoZWFkZXInLCBbXSlcbiAgLmZhY3RvcnkoJ2hlYWRlckZhY3RvcnknLCBoZWFkZXJGYWN0b3J5KVxuICAuY29udHJvbGxlcignaGVhZGVyQ3RybCcsIGhlYWRlckN0cmwpO1xuXG5oZWFkZXJGYWN0b3J5LiRpbmplY3QgPSBbJyRodHRwJ107XG5oZWFkZXJDdHJsLiRpbmplY3QgICAgPSBbJ2hlYWRlckZhY3RvcnknXTtcbiJdfQ==
