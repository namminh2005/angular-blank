require([
	'domReady',
	'appConfig'
],function(domReady) {
	domReady(function (document) {
        angular.bootstrap(document, ['AngularApp']);
    });
});
