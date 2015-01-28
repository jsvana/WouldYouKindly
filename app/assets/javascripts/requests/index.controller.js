angular.module('kindly.requests').controller('index',
  ['$scope', '$filter', 'Request', function($scope, $filter, Request) {
    $scope.requests = [];
    Request.query().then(function (requests) {
      $scope.requests = requests;
    });

    $scope.predicate = '-votes';

    $scope.upvote = function(request) {
      request.votes += 1;
    };

    $scope.typeCount = function(type) {
      var count = 0;
      for (r in $scope.requests) {
        if ($scope.requests[r].medium === type) {
          count += 1;
        }
      }
      return count;
    }
  }]
);
