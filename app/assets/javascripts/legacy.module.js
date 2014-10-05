var legacy = angular.module('legacy', ['legacy.home', 'legacy.requests',
  'ngRoute', 'templates']);

legacy.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'home'
    })
    .when('/r', {
      templateUrl: 'requests/index.html',
      controller: 'index'
    })
    .when('/r/new', {
      templateUrl: 'requests/new.html',
      controller: 'new'
    });

  $locationProvider.html5Mode(true);
});
