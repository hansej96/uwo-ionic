angular.module('starter.controllers', [])

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

.controller('QuicklinkCtrl', function($scope, $stateParams) {
});
