var kindly = angular.module('kindly', ['kindly.home', 'kindly.requests',
  'kindly.admin', 'ngRoute', 'templates']);

kindly.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'home'
    })
    .when('/admin', {
      templateUrl: 'admin/index.html',
      controller: 'admin.index'
    })
    .when('/r', {
      templateUrl: 'requests/index.html',
      controller: 'requests.index'
    })
    .when('/r/new', {
      templateUrl: 'requests/new.html',
      controller: 'requests.new'
    });

  $locationProvider.html5Mode(true);
});
