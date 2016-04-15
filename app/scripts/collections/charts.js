/*global define */
define([
  'underscore',
  'backbone',
  'models/chart'
], function (_, Backbone, Chart) {
  'use strict';

  var ChartsCollection = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: Chart,
    url: "/data.json"
  });

  return new ChartsCollection();
});
