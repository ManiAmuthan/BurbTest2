define([
	'underscore',
	'backbone',
	'models/ProductListModel'
], function(_, Backbone, productlistModel) {
  var navigationCollection = Backbone.Collection.extend({
		models : productlistModel,
		mainPath : 'https://api.burberry.com/v1/apps/ecom/pages/',
		url: function(){
			return this.mainPath + this.options.subPath;
		},
		parse: function(response) {
			return response.results;
		},
		initialize: function(models, options){
			this.options=options;
		}

	});
  return navigationCollection;
});
