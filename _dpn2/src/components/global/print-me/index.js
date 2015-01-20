module.exports = function printMe () {
  return $('.print-btn').on('click', function() {
    return window.print();
  });
};
