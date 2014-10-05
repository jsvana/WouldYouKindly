angular.module('legacy.requests').factory('Request', ['railsResourceFactory', function (railsResourceFactory) {
  return railsResourceFactory({
    url: '/requests',
    name: 'request'
  });
}]);
