define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/mainTemplate.html',
  'models/HomePageLinkModel',
  'collections/HomePageLinkCollection',
], function($, _, Backbone,  mainTemplate, linkMod, linkCollection){
  
	var MainView = Backbone.View.extend({
		el: '.containerMain',
		initialize: function () {
			
		},
		events : {
			"click #addCommentBtn" : 'whenAddCommentBtnClicked',
			"click .flow .item" : 'onItemSelected'
		},
		whenAddCommentBtnClicked : function(){
			var that = this;
			var dummyURL = 'https://community-dweetio.p.mashape.com/dweet/for/maniamuthann?content='+$('#commentTextArea').val()
			$.ajax({
				method: "POST",
				url: dummyURL,
				data: {}
			})
			.done(function( msg ) {
				that.render();
			});
		},
		onItemSelected : function(evt){
			this.currFilePath = evt.currentTarget.getAttribute('data-path');
			this.currSha = evt.currentTarget.getAttribute('data-sha');
		},
		collection : new linkCollection(),
		render: function () {
			var that = this;
			that.collection.fetch({
				beforeSend : function(xhr){
					xhr.setRequestHeader('X-Mashape-Key', 'D1ksv0lXx0msh9W3UzQgbNmcJVc7p1r0hzIjsn5OL2tmT05RAE');
					xhr.setRequestHeader('Accept', 'application/json');
				},
				success:function (collection, response) {
					var data = response.with;
					$('.containerMain').html('');
					var template = _.template(mainTemplate);
					$('.containerMain').html(template({ref : data}));
					setTimeout(function(){
						window.contentflow = require(['contentflow'], function (flow){
							var cf = new ContentFlow('ContentFlow', {reflectionColor: "#000000", 
																	circularFlow : true, 
																	startItem: 0});	
							cf.init();
						});
					}, 100);
				}
			});
	  
		} 
	});
  return MainView;

});
