angular.module('legacy.requests').directive('music', function() {
  return {
    scope: {
      music: '='
    },
    templateUrl: 'requests/_music.html'
  };
});
