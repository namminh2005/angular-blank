define([], function (module) {
    'use strict';

    function appService($http, $q, $rootScope, $state, sessionService){
        console.log('register appService');
        
        var createLink = function(link){
            return $resource(link, {}, {
                query: {method:'GET', isArray:false}
            });
        };

    	this.getList = function(link, callback){
            $rootScope.showIndicatorMistiness();
    		createLink(link).query(function(data){
                callback(data);
                $rootScope.hideIndicator();
            });
    	};

        this.getListWithoutMistiness = function(link, callback){
            $rootScope.showIndicator();
            createLink(link).query(function(data){
                callback(data);
                $rootScope.hideIndicator();
            });
        };

        this.post = function(request, serviceUrl){
            $rootScope.showIndicatorMistiness();
            var deferred = $q.defer();

            $http({
                method: 'POST',
                data: request,
                url: serviceUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'token': sessionService.getSessionId()
                },
            })
            .success(function (data, status, headers, config) {
                if(data.result === "E0007"){
                    $rootScope.returnState = $state.current.name;
                    $state.go('login');
                }
                else{
                    deferred.resolve(data);
                }
                $rootScope.hideIndicator();
            })
            .error(function (data, status, headers, config) {
                deferred.resolve({ result: "SERVICE_ERR_0001", message: "Service failed." });
            });

            return deferred.promise;
        };

        this.postWithoutMistiness = function(request, serviceUrl){
            $rootScope.showIndicator();
            var deferred = $q.defer();

            $http({
                method: 'POST',
                data: request,
                url: serviceUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'token': sessionService.getSessionId()
                },
            })
            .success(function (data, status, headers, config) {
                if(data.result === "E0007"){
                    $rootScope.returnState = $state.current.name;
                    window.location.href = "#/login";
                }
                else{
                    deferred.resolve(data);
                }
                $rootScope.hideIndicator();
            })
            .error(function (data, status, headers, config) {
                deferred.resolve({ result: "SERVICE_ERR_0001", message: "Service failed." });
            });

            return deferred.promise;
        }
    }

    appService.$inject=['$http','$q', '$rootScope', '$state', 'sessionService'];

    return appService; 

});
