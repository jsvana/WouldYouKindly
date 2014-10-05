angular.module('legacy.requests').directive('movie', function() {
  return {
    scope: {
      movie: '='
    },
    templateUrl: 'requests/_movie.html'
  };
});
