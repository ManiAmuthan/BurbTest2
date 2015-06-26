define([
	'underscore',
	'backbone',
	'models/HomePageLinkModel'
], function(_, Backbone, navigationModel) {
  var navigationCollection = Backbone.Collection.extend({
		models : navigationModel,
		url: 'https://api.github.com/users/maniamuthan/repos',
		parse: function(response) {
			return response.results;
		},
		
		initialize: function(){
			
		}
  });
  return navigationCollection;
});
