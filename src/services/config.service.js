angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quiz-api-SGR-V3.us-west-2.elasticbeanstalk.com/';

    return service;
}]);