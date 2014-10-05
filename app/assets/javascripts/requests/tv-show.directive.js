angular.module('legacy.requests').directive('tvShow', function() {
  return {
    scope: {
      tvShow: '='
    },
    templateUrl: 'requests/_tv-show.html'
  };
});
