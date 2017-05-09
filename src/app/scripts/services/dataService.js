'use strict'

angular.module('dataResource', ['ngResource'])

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
