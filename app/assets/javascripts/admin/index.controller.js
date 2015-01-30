angular.module('kindly.admin').controller('admin.index',
  ['$scope', '$http', 'Request', function($scope, $http, Request) {
    $scope.requests = [];
    Request.query().then(function (requests) {
      $scope.requests = requests;
      console.log(requests);
    });

    $scope.count = function(state) {
      var count = 0;
      for (r in $scope.requests) {
        if ($scope.requests[r].approvalState === state) {
          count += 1;
        }
      }
      return count;
    };

    $scope.pendingCount = function() {
      return $scope.count('pending');
    };

    $scope.approvedCount = function() {
      return $scope.count('approved');
    };

    $scope.deniedCount = function() {
      return $scope.count('denied');
    };

    $scope.approve = function(request) {
      request.approve();
    };

    $scope.deny = function(request) {
      request.deny();
    };
  }]
);
