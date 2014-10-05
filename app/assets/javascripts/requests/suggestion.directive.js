angular.module('legacy.requests').directive('suggestion', function() {
  return {
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
