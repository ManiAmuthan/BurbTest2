define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var navigationModel = Backbone.Model.extend({
		mainPath: 'https://community-dweetio.p.mashape.com/dweet/for/maniamuthann?content=',
		url: function(){
			return this.mainPath + this.content;
		},
		initialize: function(attributes, xhr, options) {
			this.content = options.content;
		}
		
  });
  return navigationModel;
});
