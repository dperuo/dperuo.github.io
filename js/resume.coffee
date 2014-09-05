angular
    .module 'resumeApp', ['ngTouch', 'ngAnimate']
    .controller 'headerRowCtrl', ->
        this.toggleContactInfo = false

    .controller 'skillSelector', ['$scope', '$http', ($scope, $http) ->
      $http.get 'js/api/skill-list.json'
        .success (data) ->
          vm           = $scope
          vm.category  = data.cat
          vm.skillList = data.list
    ]


$ ->
  $.getJSON 'js/api/work.json', (data) ->

    currentEvent = $('#current')
    workList     = $('#work')
    doingNow     = data.currently

    currentEvent.text(doingNow)

    $(data.work).each (i, value) ->
      workList.append '<div class="row section__entry"><div class="three col"><dl><dt class="section__item--bold">' + value.location + '</dt><dd>' + value.dates + '</dd></dl></div><div class="four col"><dl><dt class="section__item--bold">' + value.company + '</dt><dd>' + value.title + '<br><em>' + value.description + '</em></dd></dl></div><div class="three col"><img class="company-logo" src="img/' + value.logo + '" alt="" /></div></div>'
