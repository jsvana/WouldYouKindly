angular.module('kindly.requests').directive('requestMusic', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      music: '='
    },
    templateUrl: 'requests/_request_music.html'
  };
});
