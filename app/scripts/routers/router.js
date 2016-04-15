/*global define*/
define([
  "backbone",
  'collections/charts',
  'views/app',
  'views/description',
  'views/chartPage',
  'views/howto'
], function (Backbone, Charts, AppView, DescriptionView, ChartPage, HowtoView) {
  'use strict';

  return Backbone.Router.extend({
    routes: {
      '(home)': 'home',
      'description': 'description',
      'howto': 'howto',
      'chart/:id': 'showChart'
    },

    home: function() {
      new AppView();
    },

    description: function() {
      new DescriptionView();
    },

    howto: function() {
      new HowtoView();
    },

    showChart: function (param) {
      new ChartPage({id: param});
    },

    defaultRoute: function() {
      new AppView();
    }
  });
});
