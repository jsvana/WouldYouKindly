angular.module('kindly.requests').
factory('TvDb', ['$http', 'Config', function($http, Config) {
  return {
    get: function(query, callback) {
      var today = new Date();
      var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);
      var url = 'http://api.trakt.tv/search/shows.json/' + Config.traktTv.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK&query=' + window.escape(query);
      $http.jsonp(url).success(function(data) {
        callback(data);
      }).error(function(error) {
        console.log('error');
      });
    }
  }
}]);
