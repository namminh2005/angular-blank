define([],function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider.state('app', {
			abstract: true,
            views: {
            	root:{
            		controller: 'rootController',
            		templateUrl: 'modules/layout/layout.tpl.html',
            	}
            }
        });
    }

    config.$inject=['$stateProvider'];

    return config;
});