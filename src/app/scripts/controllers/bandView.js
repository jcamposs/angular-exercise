'use strict';

angular.module('bandView', [])

.controller('bandController', ['$scope', '$location', 'bandService', function ($scope, $location, bandService) {
  var bandRouteName = $location.path().split('/')[1];

  bandService.getBands().get(function(data) {
    data.bands.map(function(band) {
      if (band.id === bandRouteName) {
        $scope.name = band.id
      }
    });
  });
}]);
