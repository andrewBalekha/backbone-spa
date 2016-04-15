/*global define*/
define([
  'jquery',
  'underscore',
  'highcharts',
  'backbone',
  'text!templates/chart.html'
], function ($, _, highcharts, Backbone, chartTemplate) {
  'use strict';

  return Backbone.View.extend({
    tagName: 'section',
    className: 'chart-section',
    template: _.template(chartTemplate),

    events: {
      'click .title':	'showChart',
      'change input[name=title]': 'handleTitleChange'
    },

    render: function () {

      this.$el.html(this.template(this.model.toJSON()));
      this.afterRender();
      return this;
    },

    afterRender: function() {
      var model = this.model.toJSON();

      var options = {
        chart: {
          type: model.type,
          margin: '48'
        },
        title: {
          text: ''
        },
        yAxis: {
          title: {
            text: ''
          },
          labels: {
            enabled: false
          }
        },
        xAxis: {
          title: {
            text: ''
          },
          labels: {
            enabled: false
          }
        },
        tooltip: {
          enabled: false
        },
        series: model.data
      };

      this.$('.chart-container').highcharts(options);
    },

    showChart: function() {
      Backbone.history.navigate('chart/' + this.model.get("id"), true);
    },

    handleTitleChange: function(e) {
      this.model.set('title', e.currentTarget.value);
      this.render();
    }
  });
});
