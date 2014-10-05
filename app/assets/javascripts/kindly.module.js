var kindly = angular.module('kindly', ['kindly.home', 'kindly.requests',
  'ngRoute', 'templates']);

kindly.config(function ($routeProvider, $locationProvider) {
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
