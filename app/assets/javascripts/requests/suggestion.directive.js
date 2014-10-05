angular.module('kindly.requests').directive('suggestion', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      suggestion: '='
    },
    controller: function($scope) {
      $scope.selected = function(medium) {
        return $scope.$parent.selectionMedium === medium;
      };
    },
    templateUrl: 'requests/_suggestion.html'
  };
});
