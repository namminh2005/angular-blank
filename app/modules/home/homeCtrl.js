define([], function (module) {
    'use strict';

    function homeController($scope, $rootScope){
        console.log('Register Home Controller');
    }

    homeController.$inject=['$scope','$rootScope'];

    return homeController;

});
