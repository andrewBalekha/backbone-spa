/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        highcharts: {
            exports: "Highcharts",
            deps: ["jquery"]
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/requirejs-text/text',
        highcharts: '../bower_components/highcharts-release/highcharts',
    }
});

require([
    'backbone',
    'routers/router'
], function (Backbone, Workspace) {
    // Initialize routing and start Backbone.history()
    new Workspace();
    Backbone.history.start();
});
