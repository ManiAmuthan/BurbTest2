define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var ProductModel = Backbone.Model.extend({
		url: "https://api.burberry.com/v1/apps/ecom/pages/womens-scarves/"
  });
  return ProductModel;
});
