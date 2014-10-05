angular.module('kindly.requests').directive('movie', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '='
    },
    templateUrl: 'requests/_movie.html'
  };
});
