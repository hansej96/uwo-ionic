// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('uwoMobileApp', ['ionic', 'uwoMobileApp.controllers'])

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

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })

    .state('app.newsAndEvents', {
      url: "/news-and-events",
      views: {
        'menuContent' :{
          templateUrl: "templates/news-and-events.html"
        }
      }
    })

    .state('app.newsAndEventsUWOT', {
      url: "/news-and-events/uwot",
      views: {
        'menuContent' :{
          templateUrl: "templates/news-and-events/uwot.html",
          controller: 'CampusNewsPanelCtrl'
        }
      }
    })

    .state('app.newsAndEventsEvents', {
      url: "/news-and-events/events",
      views: {
        'menuContent' :{
          templateUrl: "templates/news-and-events/events.html",
          controller: 'EventsCtrl'
        }
      }
    })

    .state('app.newsAndEventsAdvanceTitan', {
      url: "/news-and-events/advance-titan",
      views: {
        'menuContent' :{
          templateUrl: "templates/news-and-events/advance-titan.html",
          controller: 'AdvanceTitanCtrl'
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

    .state('app.stayConnectedTwitterAccounts', {
      url: "/stay-connected/twitter-accounts",
      views: {
        'menuContent' :{
          templateUrl: "templates/stay-connected/twitter-accounts.html"
        }
      }
    })

    .state('app.stayConnectedFacebookAccounts', {
      url: "/stay-connected/facebook-accounts",
      views: {
        'menuContent' :{
          templateUrl: "templates/stay-connected/facebook-accounts.html"
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

    .state('app.campusServicesPolk', {
      url: "/campus-services/polk",
      views: {
        'menuContent' :{
          templateUrl: "templates/campus-services/polk-library.html"
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
  $urlRouterProvider.otherwise('/app/home');
});
