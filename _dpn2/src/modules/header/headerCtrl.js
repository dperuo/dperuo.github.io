module.exports = function headerCtrl (HeaderFactory) {
  var vm = this;

  HeaderFactory
    .getCurrentEvent()
    .then(function() {
      vm.currentEvent = HeaderFactory.currentEvent;
    });
};
