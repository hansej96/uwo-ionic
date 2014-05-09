angular.module('uwoMobileApp.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('QuicklinksCtrl', function($scope) {
  $scope.quicklinks = [
    { title: 'TitanWeb', id: 1 },
    { title: 'Desire 2 Learn (D2L)', id: 2 },
    { title: 'Titan Apps (email)', id: 3 },
    { title: 'Titan Apps (email) mobile setup', id: 4 }
  ];
})

.controller('CampusNewsPanelCtrl', function ($scope,$http) {
  $http.get('http://www.uwosh.edu/today/?json=1').success(function(data) {
    $scope.posts = data.posts;
  }).error(function() {
    // Some error occurred
  });
})

.controller('EventsCtrl', function ($scope,$http) {
  $http.get('http://pipes.yahoo.com/pipes/pipe.run?_id=2FV68p9G3BGVbc7IdLq02Q&_render=json&feedcount=10&feedurl=http%3A%2F%2Fwww.uwosh.edu%2Ftoday%2Fevents%2Ffeed%2F').success(function(data) {
    $scope.events = data.value.items;
  }).error(function() {
    // Some error occurred
  });
})

.controller('AdvanceTitanCtrl', function ($scope,$http) {
  $http.get('http://pipes.yahoo.com/pipes/pipe.run?_id=2FV68p9G3BGVbc7IdLq02Q&_render=json&feedcount=10&feedurl=http%3A%2F%2Fwww.advancetitan.com%2Fsearch%2F%3Fq%3D%26t%3Darticle%26l%3D10%26d%3D%26d1%3D%26d2%3D%26s%3Dstart_time%26sd%3Ddesc%26c%5B%5D%3Dnews%2Cnews%2F%2A%26f%3Drss').success(function(data) {
    $scope.posts = data.value.items;
  }).error(function() {
    // Some error occurred
  });
})

.controller('QuicklinkCtrl', function($scope, $stateParams) {
});

angular.module('uwoMobileApp')
  .filter('characters', function () {
    return function (input, chars, breakOnWord) {
      if (isNaN(chars)) {
        return input;
      }
      if (chars <= 0) {
        return '';
      }
      if (input && input.length >= chars) {
        input = input.substring(0, chars);

        if (!breakOnWord) {
          var lastspace = input.lastIndexOf(' ');
          //get last space
          if (lastspace !== -1) {
            input = input.substr(0, lastspace);
          }
        } else {
          while(input.charAt(input.length-1) === ' '){
            input = input.substr(0, input.length -1);
          }
        }
        return input + '...';
      }
      return input;
    };
  })
