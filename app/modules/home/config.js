define([],function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider.state('app.home', {
            url: '/home',
            views: {
                "content@app": {
                    controller: 'homeController',
                    templateUrl: 'modules/home/home.html',
                }
            },
            data:{
                title: 'Missnon'
            }
        });
    }

    config.$inject=['$stateProvider'];

    return config;
});