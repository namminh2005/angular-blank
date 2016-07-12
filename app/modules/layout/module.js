define([
	'angular',
	'modules/layout/config',
	'modules/layout/rootCtrl'
], function(angular, config, rootController){
	'use strict';

	var module = angular.module('AngularApp.layout', ['ui.router']);

	module.config(config);
	module.controller('rootController', rootController)

	return module;
});


