
/**
 *ROUTE CONFIGURATIONS
 */

'use strict';

angular.module("SKPBQ").config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
    when('/', {
      controller: 'mainController',
      templateUrl: 'app/templates/layout.html'
    }).
    when('/the-rolling-stones', {
      templateUrl: 'app/templates/partials/band.html',
      controller: 'bandController',
    }).
    when('/the-beatles', {
      templateUrl: 'app/templates/partials/band.html',
      controller: 'bandController',
    }).
    when('/queen', {
      templateUrl: 'app/templates/partials/band.html',
      controller: 'bandController',
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}]);
