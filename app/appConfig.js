define("appConfig", [
	'require',
	'jquery',
	'angular',
	'domReady',
	'angular-ui-router',

	'modules/layout/module',
    'modules/home/module',
	'modules/base/module'
],function(require, $, angular) {
	var app = angular.module('AngularApp', [
		'ui.router',

		'AngularApp.layout',
		'AngularApp.home'
	]);

	var url123 = "http://localhost:3000";

	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
	}]);

	app.run(['$rootScope', '$state', '$stateParams',
	function($rootScope, $state, $stateParams){
	    $rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;
	}]);
	
	return app;
});
