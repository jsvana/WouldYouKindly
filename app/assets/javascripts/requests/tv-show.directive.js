angular.module('kindly.requests').directive('tvShow', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      tvShow: '='
    },
    templateUrl: 'requests/_tv-show.html'
  };
});
