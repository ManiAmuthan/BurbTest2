define([
  'jquery',
  'underscore',
  'backbone',
  'models/CommentModel',
  'collections/producListCollection',
  'text!templates/productlist/productListTemplate.html'
], function($, _, Backbone, commentModel, pListCollection, productTemplate){
 
  var pListView = Backbone.View.extend({
		el: '.containerMain',
		currFilePath : '',
		currSha : '',
		currRepos : '',
		initialize: function () {
		},
		events : {
			"click #addCommentBtn" : 'whenAddCommentBtnClicked',
			"click .flow .item" : 'onItemSelected'
		},
		whenAddCommentBtnClicked : function(){
			console.log("Add Comment Cliked :: " + $('#commentTextArea').val());
			var commentMod = new commentModel(
				{"body" : $('#commentTextArea').val(),
				"path" : this.currFilePath,
				"position" : 1,
				"line" : null},
				{success:function (collection, response) {
					console.log(collection + " :: "+ response)
				}}, {'repos' : this.currRepos, 'sha': this.currSha}
			);
			commentMod.save();
			
		},
		onItemSelected : function(evt){
			this.currFilePath = evt.currentTarget.getAttribute('data-path');
			this.currSha = evt.currentTarget.getAttribute('data-sha');
		},
		render: function (_subPath) {
			var that = this;
			this.currRepos = _subPath;
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
							cf.init();
						});
					}, 1000);
				
				}
			});
	  
		} 
	});
  return pListView;
  
 });