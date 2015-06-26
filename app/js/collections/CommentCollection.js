define([
	'underscore',
	'backbone',
	'models/CommentModel'
], function(_, Backbone, commentModel) {
  var commentCollection = Backbone.Collection.extend({
		models : commentModel,
		// 'https://api.github.com/repos/ManiAmuthan/BurbTest2/commits/:sha/comments',
		mainPath : 'https://api.github.com/repos/',
		url: function(){
			return this.mainPath_one + this.options.repos +"/commits/"+ this.options.sha+"/comments";
		},
		parse: function(response) {
			return response.results;
		},
		initialize: function(models, options){
			this.options=options;
		}
	});
  return commentCollection;
});
