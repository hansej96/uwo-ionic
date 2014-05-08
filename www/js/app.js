// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.newsAndEvents', {
      url: "/news-and-events",
      views: {
        'menuContent' :{
          templateUrl: "templates/news-and-events.html",
          controller: 'CampusNewsPanelCtrl'
        }
      }
    })

    .state('app.peopleAndPlaces', {
      url: "/people-and-places",
      views: {
        'menuContent' :{
          templateUrl: "templates/people-and-places.html"
        }
      }
    })
    .state('app.quicklinks', {
      url: "/quicklinks",
      views: {
        'menuContent' :{
          templateUrl: "templates/quicklinks.html",
          controller: 'QuicklinksCtrl'
        }
      }
    })

    .state('app.quicklink', {
      url: "/quicklinks/:quicklinkId",
      views: {
        'menuContent' :{
          templateUrl: "templates/quicklink.html",
          controller: 'QuicklinkCtrl'
        }
      }
    })

    .state('app.stayConnected', {
      url: "/stay-connected",
      views: {
        'menuContent' :{
          templateUrl: "templates/stay-connected.html"
        }
      }
    })

    .state('app.campusServices', {
      url: "/campus-services",
      views: {
        'menuContent' :{
          templateUrl: "templates/campus-services.html"
        }
      }
    })

    .state('app.emergency', {
      url: "/emergency",
      views: {
        'menuContent' :{
          templateUrl: "templates/emergency.html"
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/news-and-events');
});
