module.exports = function experienceCtrl (experienceFactory) {
  var vm = this;

  experienceFactory
    .getWork()
    .then(function() {
      vm.work = experienceFactory.work;
    });
};
