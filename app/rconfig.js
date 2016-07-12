requirejs.config({
    waitSeconds: 0,
    paths: {
        'jquery': './bower_components/jquery/jquery',
        'angular': './bower_components/angular/angular',
        'angular-ui-router': './bower_components/angular-ui-router/release/angular-ui-router',
        'domReady': './bower_components/domReady/domReady',
    },
    shim: {
        'angular': {'exports': 'angular', deps: ['jquery']},
        'angular-ui-router': { deps: ['angular'] },
    },
    priority: [
        'jquery',
        'angular'
    ]
});