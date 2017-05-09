'use strict'

angular.module('bandService', ['ngResource'])

.factory('bandService', ['$resource', function ($resource) {
    var urlBase = './app';

    var getBands = function () {
      return $resource(
        urlBase + '/assets/data.json', {}, {
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
