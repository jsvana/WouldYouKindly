angular.module('legacy.requests').
factory('RottenTomatoes', ['$http', 'Config', function($http, Config) {
  return {
    get: function(query, callback) {
      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apiKey=' + Config.rottenTomatoes.apiKey + '&callback=JSON_CALLBACK&q=' + window.escape(query))
      .success(function(data, status) {
        callback(data);
      })
    }
  }
}]);
