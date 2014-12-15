(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var noJS    = require('./no-js');
var header = require('../header');

noJS();

angular
  .module('resumeApp', [
    'header'
    ]);

},{"../header":5,"./no-js":2}],2:[function(require,module,exports){
module.exports = noJS;

function noJS () {
  // Remove the 'no-js' class when JavaScript's enabled
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9tb2R1bGVzL2dsb2JhbC9hcHAuanMiLCJzcmMvbW9kdWxlcy9nbG9iYWwvbm8tanMuanMiLCJzcmMvbW9kdWxlcy9oZWFkZXIvaGVhZGVyQ3RybC5qcyIsInNyYy9tb2R1bGVzL2hlYWRlci9oZWFkZXJGYWN0b3J5LmpzIiwic3JjL21vZHVsZXMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBub0pTICAgID0gcmVxdWlyZSgnLi9uby1qcycpO1xudmFyIGhlYWRlciA9IHJlcXVpcmUoJy4uL2hlYWRlcicpO1xuXG5ub0pTKCk7XG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgncmVzdW1lQXBwJywgW1xuICAgICdoZWFkZXInXG4gICAgXSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG5vSlM7XG5cbmZ1bmN0aW9uIG5vSlMgKCkge1xuICAvLyBSZW1vdmUgdGhlICduby1qcycgY2xhc3Mgd2hlbiBKYXZhU2NyaXB0J3MgZW5hYmxlZFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIik7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhlYWRlckN0cmwgKGhlYWRlckZhY3RvcnkpIHtcbiAgdmFyIHZtID0gdGhpcztcblxuICB2bS5jdXJyZW50RXZlbnQgPSBoZWFkZXJGYWN0b3J5LmN1cnJlbnRFdmVudDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhlYWRlckZhY3RvcnkgKCkge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRFdmVudDogXCJ0aGluZ3MgYW5kIHN0dWZmLi4uXCJcbiAgfTtcbn07XG4iLCJ2YXIgaGVhZGVyRmFjdG9yeSA9IHJlcXVpcmUoJy4vaGVhZGVyRmFjdG9yeScpO1xudmFyIGhlYWRlckN0cmwgICAgPSByZXF1aXJlKCcuL2hlYWRlckN0cmwnKTtcblxuYW5ndWxhclxuICAubW9kdWxlKCdoZWFkZXInLCBbXSlcbiAgLmZhY3RvcnkoJ2hlYWRlckZhY3RvcnknLCBoZWFkZXJGYWN0b3J5KVxuICAuY29udHJvbGxlcignaGVhZGVyQ3RybCcsIGhlYWRlckN0cmwpO1xuXG5oZWFkZXJGYWN0b3J5LiRpbmplY3QgPSBbJyRodHRwJ107XG5oZWFkZXJDdHJsLiRpbmplY3QgICAgPSBbJ2hlYWRlckZhY3RvcnknXTtcbiJdfQ==
