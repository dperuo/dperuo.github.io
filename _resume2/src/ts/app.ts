/// <reference path="./def/angular.d.ts" />

(function () {
"use strict";

angular
  .module('resumeApp', ['ngTouch'])
  .controller('headerRow', headerRowFn)
  .controller('skillSelector', skillSelectorFn);

function headerRowFn() {
  var vm = this;
  vm.toggleContactInfo = false;
}

function skillSelectorFn() {
  var vm = this;
  vm.skillList = {
     "Top 12": [
        "Angular.js",
        "Bootstrap 3",
        "CoffeeScript",
        "Compass",
        "CSS3",
        "Foundation 5",
        "HTML5",
        "Illustrator",
        "jQuery",
        "Less",
        "Photoshop",
        "Sass"
      ]
    }
  }
})();


$(function () {
  $.getJSON('js/work.json', function(data) {
    var $workList;
    $workList = $('#work');
    $(data.work).each(function(i, value) {
      $workList.append('<div class="row section__entry"><div class="three col"><dl><dt class="section__item--bold">' + value.location + '</dt><dd>' + value.dates + '</dd></dl></div><div class="four col"><dl><dt class="section__item--bold">' + value.company + '</dt><dd>' + value.title + '<br><em>' + value.description + '</em></dd></dl></div><div class="three col"><img class="company-logo" src="img/' + value.logo + '" alt="" /></div></div>');
    });
  });
});
