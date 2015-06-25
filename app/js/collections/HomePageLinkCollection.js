define([
	'underscore',
	'backbone',
	'models/HomePageLinkModel'
], function(_, Backbone, navigationModel) {
  var navigationCollection = Backbone.Collection.extend({
		models : navigationModel,
		url: 'https://api.burberry.com/v1/apps/ecom/navigation?country=GB',
		parse: function(response) {
			return response.results;
		},
		
		initialize: function(){
			
		}
  });
  return navigationCollection;
});
