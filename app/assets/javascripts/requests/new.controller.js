angular.module('kindly.requests').controller('requests.new',
  ['$scope', '$location', '$http', 'RottenTomatoes', 'LastFm', 'TvDb',
  'Request', function($scope, $location, $http, RottenTomatoes, LastFm,
  TvDb, Request) {
    $scope.suggestions = [];
    $scope.selection = null;
    $scope.medium = 'movie';
    $scope.selectionMedium = 'movie';
    $scope.query = '';

    $scope.changeMedium = function() {
      $scope.search();
    };

    $scope.searchMovies = function() {
      RottenTomatoes.get($scope.query, function(data) {
        if (data.total === 0) {
          // No results
          $scope.suggestions.push({
            title: 'Movie not found'
          });
        } else {
          // One result
          $scope.suggestions = data.movies.slice(0, 5);
        }
      });
    };

    $scope.searchMusic = function() {
      LastFm.get($scope.query, function(data) {
        if (data.results['opensearch:totalResults'] === '0') {
          // No results
          $scope.suggestions = [{
            name: 'Album not found'
          }];
        } else {
          var album = data.results.albummatches.album;
          if (data.results.albummatches.album.length === undefined) {
            // Only one result
            $scope.suggestions = [album];
          } else {
            // Get first five results
            $scope.suggestions = album.slice(0, 5);
          }
        }
      });
    };

    $scope.searchTvShows = function() {
      TvDb.get($scope.query, function(data) {
        $scope.suggestions = data.slice(0, 5);
      });
    };

    $scope.search = function() {
      if ($scope.query.length > 1) {
        switch ($scope.medium) {
        case 'movie':
          $scope.searchMovies();
          break;

        case 'music':
          $scope.searchMusic();
          break;

        case 'tv-show':
          $scope.searchTvShows();
          break;

        default:
          // For troublemakers
          $scope.suggestions = [];
          break;
        }
      } else {
        $scope.suggestions = [];
      }
    };

    $scope.searching = function(medium) {
      return $scope.medium === medium && $scope.suggestions.length > 0;
    };

    $scope.select = function(selection) {
      $scope.selection = selection;
      $scope.selectionMedium = $scope.medium;
    };

    $scope.hasSelection = function() {
      return $scope.selection !== null;
    };

    $scope.createRequest = function() {
      var request
        = Request.fromSuggestion($scope.selectionMedium, $scope.selection);

      if (request) {
        request.create()
        .then(function() {
          $location.path('/r');
        });
      }
    };
  }]
);
