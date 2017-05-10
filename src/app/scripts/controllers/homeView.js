'use strict';

angular.module("homeView", [])

.controller('homeController', ['$scope', 'pageService', getPages]);

function getPages($scope, pageService) {
  pageService.getPages().get(function(data) {
    $scope.pages = data.pages
  });
}
