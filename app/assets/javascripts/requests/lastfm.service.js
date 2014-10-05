angular.module('kindly.requests').
factory('LastFm', ['$http', 'x2js', 'Config', function($http, x2js, Config) {
  return {
    get: function(query, callback) {
      $http.get(
        'http://ws.audioscrobbler.com/2.0/?method=album.search&api_key=' + Config.lastFm.apiKey + '&format=json&album=' + window.escape(query)
      ).
      success(function(data, status) {
        callback(data);
      })
    }
  }
}]);
