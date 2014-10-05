angular.module('kindly.requests').directive('requestMovie', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '='
    },
    templateUrl: 'requests/_request_movie.html'
  };
});
