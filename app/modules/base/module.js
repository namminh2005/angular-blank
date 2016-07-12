define([
    'angular',
    'modules/base/appConst',
    'modules/base/appUrl',
    'modules/base/appUtil',
    'modules/base/appService'
], function(angular, appConst, appUrl, appUtil, appService) {
    'use strict';

    var module = angular.module('AngularApp.base', []);

	module.constant('appConst', appConst);
    module.constant('appUrl', appUrl);
    module.factory('appUtil', appUtil);
    module.service('appService', appService);

	return module;
});