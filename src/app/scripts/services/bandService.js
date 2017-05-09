'use strict'

angular.module('bandService', ['ngResource'])

.factory('bandService', ['$resource', function ($resource) {
    var urlBase = './app';

    var getBands = function () {
      return $resource(
        urlBase + '/resources/bands.json', {}, {
        get: {
          method: 'GET',
          isArray: false
        }
      });
    };

    return {
      getBands: getBands
    };
}]);
