define([
	'underscore',
	'backbone',
	'models/ProductListModel'
], function(_, Backbone, productlistModel) {
  var navigationCollection = Backbone.Collection.extend({
		models : productlistModel,
		mainPath_one : 'https://api.github.com/repos/',
		mainPath_two : '/git/trees/master',
		
		url: function(){
			var isHttps = (this.options.subPath).indexOf("https");
			if(isHttps >= 0){
				var url = unescape((this.options.subPath).toString());
				return url;
			}
			return this.mainPath_one + this.options.subPath + this.mainPath_two;
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
