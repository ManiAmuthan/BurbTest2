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
					var data = response.tree;
					var template = _.template(productTemplate);
					$('.containerMain').html(template({ref : data}));
					setTimeout(function(){
						if(window.contentflow) delete window.contentflow;
						window.contentflow = require(['contentflow'], function (flow){
							var cf = new ContentFlow('ContentFlowPList', {reflectionColor: "#000000", 
																	circularFlow : false, 
																	startItem: 0});	
							//cf._defaultConf.reload(true);
							cf.init();
							//cf.reload(true);
						});
						
					}, 2000);
				
				}
			});
	  
		} 
	});
  return pListView;
  
 });