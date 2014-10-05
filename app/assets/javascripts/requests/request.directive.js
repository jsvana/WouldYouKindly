angular.module('kindly.requests').directive('request', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      request: '='
    },
    controller: function($scope) {
      $scope.is = function(medium) {
        return $scope.request.medium === medium;
      };
    },
    templateUrl: 'requests/_request.html'
  };
});
