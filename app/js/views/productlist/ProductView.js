define([
  'jquery',
  'underscore',
  'backbone',
  'collections/producListCollection',
  'text!templates/productlist/productListTemplate.html'
], function($, _, Backbone, pListCollection, productTemplate){
 
  var pListView = Backbone.View.extend({
		el: '.containerMain',
		initialize: function () {
		  
		},

		
		render: function (_subPath) {
			var that = this;
			var collection = new pListCollection([], {subPath:_subPath});
			collection.fetch({
				success:function (collection, response) {
					var data = response.response.data;
					var template = _.template(productTemplate);
					$('.containerMain').html(template({ref : data}));
					setTimeout(function(){
						console.log("Set Time out Called");
						require(['contentflow'], function (flow){
							
							var cf = new ContentFlow('ContentFlowPList', {reflectionColor: "#000000", 
																	circularFlow : false, 
																	startItem: 0});	
							
						});
					}, 3000);
				
				}
			});
	  
		} 
	});
  return pListView;
  
 });