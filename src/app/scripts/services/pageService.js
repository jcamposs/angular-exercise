'use strict'

angular.module('pageService', ['ngResource'])

.factory('pageService', ['$resource', function ($resource) {
    var urlBase = './app';

    var getPages = function () {
      return $resource(
        urlBase + '/resources/pages.json', {}, {
        get: {
          method: 'GET',
          isArray: false
        }
      });
    };

    return {
      getPages: getPages
    };
}]);
