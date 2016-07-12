var path = require('path');

module.exports = function(grunt) {
    var appfile = grunt.file.readJSON('appfile.json');
    grunt.initConfig({
        requirejs: {
            jsbuilt:{
                options:{
                    baseUrl: '.tmp',
                    removeCombined: true,
                    name: 'main',
                    out: '.tmp/app-combined.js',
                    mainConfigFile : ['.tmp/rconfig.js'],
                    optimize:'uglify',
                    paths : {
                        requireLib : 'bower_components/requirejs/require'
                    },
                    include : [
                        'requireLib'
                    ],
                },
            }
        },
        ngtemplates: {
            built: {
                cwd: '.tmp',
                src: ['layout/**/*.html', 'modules/**/*.html'],
                dest:'.tmp/apptemplates.js',
                options: {
                    module: 'AngularApp',
                    bootstrap: function(module, script) {
                        return "define(['appConfig'], function(app) { app.run(['$templateCache', function($templateCache) {" + script + "}])});";
                    }
                },
            }
        },
        clean: {
            tmp: ['.tmp'],
            built: ['built'],
            assetsbuilt: ['built/assets/*']
        },
        copy: {
            apptotmp: {
                expand: true, 
                cwd: 'app',
                src: '**', 
                dest: '.tmp/', 
                filter: 'isFile',
            },
            assetsbuilt:{
                files: [
                    {expand: true, cwd: '.tmp/assets/fonts', flatten: true, src: '**', dest: 'built/assets', filter: 'isFile'},
                    {expand: true, cwd: '.tmp/assets/img', flatten: true, src: '**', dest: 'built/assets', filter: 'isFile'},
                ]
            }
        },
        'string-replace': {
            htmlbuilt:{
                files: [{
                    expand: true,
                    cwd: '.tmp/',
                    src: 'index.html',
                    dest: 'built/'
                }],
                options: {
                    replacements:[{
                        pattern: /(<!-- @replaceJsWhenBuilt -->(\s|\S)*?<!-- end-replaceJsWhenBuilt -->)/g,
                        replacement: function (match, p1) {
                            // grunt.log.writeln(match);
                            // grunt.log.writeln(p1);
                            for (var key in grunt.filerev.summary) {
                                var isJs = key.indexOf( "app-combined.js");
                                if(isJs > -1){
                                    return '<script src="' + grunt.filerev.summary[key].replace('built\\','') + '"></script>';
                                }
                            }

                            // return '<script src="app-combined.js"></script>';
                            // return grunt.file.read(grunt.config.get('config.dist') + p1);
                        }
                    },
                    {
                        pattern: /(<!-- @replaceCssWhenBuilt -->(\s|\S)*?<!-- end-replaceCssWhenBuilt -->)/g,
                        replacement: function (match, p1) {
                            for (var key in grunt.filerev.summary) {
                                var isCss = key.indexOf( "app.min.css");
                                if(isCss > -1){
                                    return '<link rel="stylesheet" type="text/css" href="' + grunt.filerev.summary[key].replace('built\\','') + '">';
                                }
                            }
                            
                            // return grunt.file.read(grunt.config.get('config.dist') + p1);
                        }
                    }]
                }
            },
            cssbuilt: {
                files: [{
                    expand: true,
                    cwd: '.tmp/',
                    src: 'app.min.css',
                    dest: 'built/'
                }],
                options: {
                    replacements:[{
                        pattern: /(url\(\.\.\/(\s|\S)*?\))|(url\(\.\/(\s|\S)*?\))|(url\(\/(\s|\S)*?\))/g,
                        replacement: function (match, p1) {
                            var tmp = match.split('/');
                            var result = tmp[0].replace('..','') + 'assets/' + tmp[tmp.length-1];
                            return result;
                            // return grunt.file.read(grunt.config.get('config.dist') + p1);
                        }
                    }]
                }
            }
        },
        concat: {
            css: {
                src: ['.tmp/**/*.css'],
                dest: '.tmp/app.css'
            }
        },
        cssmin: {
            static_mappings: {
                files: [
                    {src: '.tmp/app.css', dest: '.tmp/app.min.css'}
                ]
            }
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            images: {
                src: ['dist/assets/img/favicon/favicon.ico']
            },
            js: {
                src: ['built/app-combined.js']
            },
            css: {
                src: ['built/app.min.css']
            }
        },
        rewrite: {
            jsbuiltUrlChange:{
                src: '.tmp/app-combined.js',
                editor: function (content, filePath) {
                    var strContent = content;
                    for(var key in appfile.url){
                        var urlOriginal = Object.keys(appfile.url[key]);
                        var urlNew = appfile.url[key][urlOriginal];
                        strContent = strContent.split(urlOriginal).join(urlNew);
                    }
                    grunt.file.write('built/app-combined.js', strContent);
                    return content;
                }
            },
            jsbuiltAddTemplate:{
                src: '.tmp/main.js',
                editor: function (content, filePath) {
                    var strContent = content.replace('appConfig', 'apptemplates');
                    return strContent;
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-rewrite');

    //some task on release
    grunt.registerTask('copytotmp',     ['clean:tmp', 'clean:built', 'copy:apptotmp']);
    grunt.registerTask('assetsbuilt',   ['clean:assetsbuilt', 'copy:assetsbuilt']);
    grunt.registerTask('jsbuilt',       ['ngtemplates:built', 'rewrite:jsbuiltAddTemplate', 'requirejs:jsbuilt', 'string-replace:jsbuilt', 'rewrite:jsbuiltUrlChange']);
    grunt.registerTask('cssbuilt',      ['concat:css', 'cssmin:static_mappings', 'string-replace:cssbuilt']);
    grunt.registerTask('htmlbuilt',     ['string-replace:htmlbuilt']);

    //build all to release
    grunt.registerTask('production',    [
        'clean:tmp', 
        'clean:built',
        'copy:apptotmp', 
        'copy:assetsbuilt', 
        'ngtemplates:built', 
        'rewrite:jsbuiltAddTemplate',
        'requirejs:jsbuilt', 
        'rewrite:jsbuiltUrlChange',
        'concat:css', 
        'cssmin:static_mappings', 
        'string-replace:cssbuilt', 
        'filerev',
        'string-replace:htmlbuilt', 
        'clean:tmp'
    ]);
};