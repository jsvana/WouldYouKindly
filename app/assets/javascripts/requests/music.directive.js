angular.module('kindly.requests').directive('music', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      music: '='
    },
    templateUrl: 'requests/_music.html'
  };
});
