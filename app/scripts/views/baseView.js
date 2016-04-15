define([
  'jquery',
  'backbone'
], function ($, Backbone) {
  'use strict';

  return Backbone.View.extend({
    el: '#report-layout',
    initialize: function() {
      this.$container = this.$('#main');
      this.render();
    }
  });
});
