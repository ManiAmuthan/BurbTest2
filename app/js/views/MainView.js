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
					var data = response;
					var template = _.template(mainTemplate);
					console.log(data[0].full_name);
					$('.containerMain').html(template({ref : data}));
					setTimeout(function(){
						window.contentflow = require(['contentflow'], function (flow){
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
