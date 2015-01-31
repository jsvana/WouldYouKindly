angular.module('kindly.requests').controller('requests.index',
  ['$scope', '$filter', 'Request', function($scope, $filter, Request) {
    var activeTab = 'none';

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
    };

    $scope.selectTab = function(tab) {
      activeTab = tab;
    };

    $scope.newRequestLink = function() {
      var url = '/r/new';
      if (activeTab !== 'none') {
        url += '#' + activeTab.toLowerCase().replace(/ /g, '-');
      }
      return url;
    };

    $scope.newRequestText = function() {
      var text = 'New';
      if (activeTab !== 'none') {
        text += ' ' + activeTab;
      }
      text += ' Request';
      return text;
    };
  }]
);
