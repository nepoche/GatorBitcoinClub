(function() {
  angular.module('BitcoinClub')
        .factory('SignupService', SignupService);

  SignupService.$inject = ['$http'];

  function SignupService($http){
    init();
    var members = [];
    return {
      create: createOneMember
    };

    function init(){ // this is going to make our first data request upon file load
      $http.get('/members')
            .then(function(response){
              members = response.data.members;
            })
            .catch(function(err){
              console.log(err);
            });
    }

    function createOneMember(member){
      $http.post('/members', member)
          .then(function(response){
            members.push(member);
          })
          .catch(function(err){
            console.log(err);
          });
    }
  }
}());
