define([
	'underscore',
	'backbone',
	'models/HomePageLinkModel'
], function(_, Backbone, navigationModel) {
  var navigationCollection = Backbone.Collection.extend({
		models : navigationModel,
		url : 'https://community-dweetio.p.mashape.com/get/dweets/for/maniamuthann',
		parse: function(response) {
			return response.results;
		},
		initialize: function(){
			
		}
  });
  return navigationCollection;
});
