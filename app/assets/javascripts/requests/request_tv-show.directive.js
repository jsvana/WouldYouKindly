angular.module('kindly.requests').directive('requestTvShow', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      tvShow: '='
    },
    templateUrl: 'requests/_request_tv-show.html'
  };
});
