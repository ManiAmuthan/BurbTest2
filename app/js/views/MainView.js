define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/mainTemplate.html',
  'collections/HomePageLinkCollection',
], function($, _, Backbone,  mainTemplate, linkCollection){
  
	var MainView = Backbone.View.extend({
		el: '.containerMain',
		initialize: function () {
		  
		},
		collection : new linkCollection(),
		render: function () {
			var that = this;
			that.collection.fetch({
				success:function (collection, response) {
					var data = response.response;
					var template = _.template(mainTemplate);
					$('.containerMain').html(template({ref : data}));
					setTimeout(function(){
						require(['contentflow'], function (flow){
							var cf = new ContentFlow('ContentFlow', {reflectionColor: "#000000", 
																	circularFlow : false, 
																	startItem: 0});	
						});
					}, 1000);
				
				}
			});
	  
		} 
	});
  return MainView;

});
