module.exports = function headerCtrl (headerFactory) {
  var vm = this;

  vm.currentEvent = headerFactory.currentEvent;
};
