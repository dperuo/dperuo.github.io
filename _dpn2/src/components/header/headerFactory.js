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
