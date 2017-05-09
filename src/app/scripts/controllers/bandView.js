'use strict';

angular.module('bandView', [])

.controller('bandController', ['$scope', '$sce', '$location', 'bandService', showBand]);

function showBand($scope, $sce, $location, bandService) {
  var bandRouteName = $location.path().split('/')[1];

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  bandService.getBands().get(function(data) {
    data.bands.map(function(band) {
      if (band.id === bandRouteName) {
        $scope.band = band;
      }
    });
  });
}
