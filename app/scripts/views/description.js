define([
  'underscore',
  'jquery',
  'backbone',
  'views/baseView',
  'text!templates/description.html'
], function (_, $, Backbone, BaseView, descriptionTemplate) {
  'use strict';

  return Backbone.View.extend({
    el: '#report-layout',
    initialize: function() {
      BaseView.prototype.initialize.apply(this);
      $('a[href$="description"]').addClass('active').siblings().removeClass('active');
    },
    // Compile our stats template
    template: _.template(descriptionTemplate),

    render: function() {
      this.$container.html(this.template());
    }
  });
});
