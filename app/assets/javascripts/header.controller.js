angular.module('kindly').controller('header', function($scope, $location) {
  $scope.isActive = function(route) {
    var controller = $location.path().split('/')[1];
    return controller === route;
  };
});
