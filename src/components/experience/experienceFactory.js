module.exports = function ExperienceFactory ($http) {

  ExperienceFactory.work = [];

  ExperienceFactory.getWork = function getJobs () {
    return $http.get('app/api/experienceList.json')
      .success(function(data) {
        ExperienceFactory.work = data.work;
      })
      .error(function(error) {
        console.log(error);
      });
  };

  return ExperienceFactory;
};
