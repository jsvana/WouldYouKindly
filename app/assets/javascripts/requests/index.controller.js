angular.module('legacy.requests').controller('requests-index',
  ['$scope', 'Request', function($scope, Request) {
    Request.query().then(function (requests) {
      $scope.requests = requests;
    });

    $scope.predicate = '-votes';

    $scope.upvote = function(request) {
      request.votes += 1;
    };
  }]
);
