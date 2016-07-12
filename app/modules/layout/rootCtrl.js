define([], function(ng){
	'use strict';

	function rootController($scope, $rootScope){
		console.log("register root controller");
	}

	rootController.$inject=['$scope','$rootScope'];

    return rootController;
	
});