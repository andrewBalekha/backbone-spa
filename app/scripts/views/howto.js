define([
  'underscore',
  'jquery',
  'backbone',
  'views/baseView',
  'text!templates/howto.html'
], function (_, $, Backbone, BaseView, howtoTemplate) {
  'use strict';

  return BaseView.extend({
    el: '#report-layout',
    initialize: function() {
      BaseView.prototype.initialize.apply(this);
      $('a[href$="howto"]').addClass('active').siblings().removeClass('active');
    },
    // Compile our stats template
    template: _.template(howtoTemplate),

    render: function() {
      this.$container.html(this.template());
    }
  });
});
