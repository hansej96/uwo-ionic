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
