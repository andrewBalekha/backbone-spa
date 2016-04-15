define([
  'underscore',
  'backbone',
  "collections/charts",
  "views/charts"
], function(_, Backbone, Charts, ChartView) {
  return Backbone.View.extend({
    el: '#report-layout',
    _chartId: null,
    initialize: function(params) {
      this.$container = this.$('#main');
      this.listenTo(Charts, 'all', _.debounce(this.render, 0));

      this._chartId = params.id;
      if (Charts.length === 0) {
        Charts.fetch({reset:true});
      } else {
        this.render();
      }
    },

    render: function() {
      var chart = Charts.find(function(item) {
        return item.get("id") === parseInt(this._chartId, 10);
      }.bind(this));

      if (chart !== undefined) {
        this.$container.html(new ChartView({model: chart}).render().el);
      }
    }
  });
});
