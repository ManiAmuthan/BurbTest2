define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var ProductModel = Backbone.Model.extend({
		mainPath : 'https://api.github.com/repos/',
		url: function(){
			return this.mainPath + this.repos +"/commits/"+ this.sha+"/comments";
		},
		initialize: function(attributes, xhr, options) {
			this.repos = options.repos;
			this.sha = options.sha;
			console.log("this :::: "+ this.repos);
			
		}
  });
  return ProductModel;
});
