define([
    'angular',
    'modules/home/config',
    'modules/home/homeCtrl'
], function(angular, config, homeController) {
    'use strict';

    var module = angular.module('AngularApp.home', ['ui.router']);

	module.config(config);
	module.controller('homeController', homeController)

	return module;
});