angular.module('kindly.requests').factory('Request', ['railsResourceFactory', '$http', function (railsResourceFactory, $http) {
  var Request = railsResourceFactory({
    url: '/requests',
    name: 'request'
  });

  Request.prototype.approve = function() {
    var req = this;
    $http.post('/requests/' + this.id + '/approve')
    .success(function(r) {
      req.approvalState = 'approved';
    }).error(function(err) {
      console.log(err);
    });
  };

  Request.prototype.deny = function() {
    var req = this;
    $http.post('/requests/' + this.id + '/deny')
    .success(function(r) {
      req.approvalState = 'denied';
    }).error(function(err) {
      console.log(err);
    });
  };

  Request.fromSuggestion = function(medium, suggestion) {
    switch (medium) {
    case 'movie':
      return new Request({
        name: suggestion.title,
        medium: medium,
        external_id: suggestion.id,
        external_service: 'Rotten Tomatoes',
        year: suggestion.year,
        rating: suggestion.mpaa_rating,
        art: suggestion.posters.thumbnail,
        link: suggestion.links.self,
        link_service: 'Rotten Tomatoes',
        audience_score: suggestion.ratings.audience_score,
        critics_score: suggestion.ratings.critics_score,
        runtime: suggestion.runtime
      });

    case 'music':
      return new Request({
        name: suggestion.name,
        medium: medium,
        artist: suggestion.artist,
        external_id: suggestion.mbid,
        external_service: 'MusicBrainz',
        art: suggestion.image[2]['#text'],
        link: suggestion.url,
        link_service: 'Last.fm'
      });

    case 'tv-show':
      return new Request({
        name: suggestion.title,
        medium: medium,
        external_id: suggestion.tvdb_id,
        external_service: 'TheTVTB',
        art: suggestion.images.poster,
        link: suggestion.url,
        link_service: 'Trakt.tv',
        year: suggestion.year,
        rating: suggestion.certification,
        genres: suggestion.genres.join(', '),
        audience_score: suggestion.ratings.percentage,
        runtime: suggestion.runtime
      });

    default:
      return null;
    }
  };

  return Request;
}]);
