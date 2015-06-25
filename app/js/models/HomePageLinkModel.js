define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var navigationModel = Backbone.Model.extend({
		url: 'https://api.burberry.com/v1/apps/ecom/navigation?country=GB'
  });
  return navigationModel;
});
