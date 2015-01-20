exports.skillList = skillList;

var skillList = {};

skillList.list = [];

skillList.getSkills = function getSkills () {
  return $.getJSON('app/api/skillList.json', function (data) {
    data.forEach(function(value, index, array) {
      skillListFactory.list.push(value);
    });
  });
};

skillList.loadSkills = function loadSkills () {
  var elem = $('#skill-list');
  elem.html('<h1>Yep yep!</h1>');
};
