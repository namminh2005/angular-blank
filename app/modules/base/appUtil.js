define([
	'angular'
], function (module) {
    'use strict';

    function appUtil($scope, $rootScope){
        console.log('register appUtil');
    }

    appUtil.$inject=['$scope','$rootScope'];

    return appUtil; 

});
