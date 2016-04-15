define([
  'underscore',
  'backbone',
  "collections/charts",
  "views/charts"
], function(_, Backbone, Charts, ChartView) {
  return Backbone.View.extend({
    el: '#report-layout',
    initialize: function() {
      this.$container = this.$('#main');
      this.listenTo(Charts, 'all', _.debounce(this.render, 0));
      $('a[href$="home"]').addClass('active').siblings().removeClass('active');
      Charts.fetch();
    },

    render: function() {
      if (Charts.length !== 0) {
        this.$container.html("");
        Charts.each(function(chart) {
          this.$container.append(new ChartView({model: chart}).render().el);
        }.bind(this));
      }
    }
  });
});
